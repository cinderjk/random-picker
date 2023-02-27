<script>
  import {
    wrapper,
    container,
    title,
    subtitle,
    warningText,
    modalContainer,
    modalContent,
    modalTitle,
    list,
    listItem,
    listItemText,
    listItemButton,
    inputgroup,
    input,
    clearButton,
    button,
    innerButton,
    footerText,
    footerLink,
  } from "./styles.js";
  import { onMount } from "svelte";
  let ref;
  let isModalVisible = false;

  onMount(() => {
    ref.focus();
    const storedOptions = localStorage.getItem("options");
    if (storedOptions & (storedOptions !== "[]")) {
      options = JSON.parse(storedOptions);
    } else {
      options = ["Option 1", "Option 2", "Option 3"];
      localStorage.setItem("options", JSON.stringify(options));
    }
  });

  let options = [];
  let value = "";
  let selectedOption = "";
  let error = "";

  function addOption() {
    if (value === "") {
      error = "Please enter a value";
      return;
    }
    if (options.includes(value)) {
      error = "This option already exists";
      return;
    }
    error = "";
    options.push(value);
    localStorage.setItem("options", JSON.stringify(options));
    options = [...options];
    value = "";
    ref.focus();
  }

  function deleteOption(option) {
    options = options.filter((o) => o !== option);
    localStorage.setItem("options", JSON.stringify(options));
    options = [...options];
    if (options.length === 0) {
      error = "Please add an option first";
    }
  }

  function choose() {
    if (options.length === 0) {
      error = "Please add an option first";
      return;
    }
    error = "";
    const random = Math.floor(Math.random() * options.length);
    isModalVisible = true;
    selectedOption = options[random];
  }

  function closeModal() {
    isModalVisible = false;
  }

  function clearOptions() {
    options = [];
    localStorage.setItem("options", JSON.stringify(options));
    options = [...options];
    ref.focus();
    if (options.length === 0) {
      error = "Please add an option first";
    }
  }
</script>

<div class={wrapper}>
  <div class={container}>
    <h1 class={title}>Random Picker</h1>
    <h2 class={subtitle}>Click the button to choose a random option.</h2>
    <button class={button} on:click={choose}>Choose</button>

    <ul class={list}>
      {#each options as option}
        <li class={listItem}>
          <span class={listItemText}>{option}</span>
          <button class={listItemButton} on:click={deleteOption(option)}
            >X</button
          >
        </li>
      {/each}
    </ul>
    {#if error}
      <p class={warningText}>{error}</p>
    {:else}
      <button class={clearButton} on:click={clearOptions}>Clear</button>
    {/if}
    <form class={inputgroup}>
      <input
        class={input}
        bind:value
        bind:this={ref}
        placeholder="Add an Option"
      />
      <button class={innerButton} on:click={addOption} type="submit">Add</button
      >
    </form>
    <p class={footerText}>
      Made with ♥ by <a
        class={footerLink}
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/cinderjk">cinderjk</a
      >
    </p>
  </div>

  {#if isModalVisible}
    <div class={modalContainer}>
      <div class={modalContent}>
        <div class={modalTitle}>{selectedOption}</div>
        <button class={button} on:click={closeModal}>Close</button>
      </div>
    </div>
  {/if}
</div>
