<script>
  import {
    wrapper,
    container,
    title,
    subtitle,
    warningText,
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
  } from "./styles.js";
  import { onMount } from "svelte";

  onMount(() => {
    const storedOptions = localStorage.getItem("options");
    if (storedOptions) {
      options = JSON.parse(storedOptions);
    } else {
      options = ["Option 1", "Option 2", "Option 3"];
      localStorage.setItem("options", JSON.stringify(options));
    }
  });

  let options = [];
  let value = "";

  function addOption() {
    options.push(value);
    localStorage.setItem("options", JSON.stringify(options));
    options = [...options];
    value = "";
  }

  function deleteOption(option) {
    options = options.filter((o) => o !== option);
    localStorage.setItem("options", JSON.stringify(options));
    options = [...options];
  }

  function choose() {
    if (options.length === 0) {
      alert("Please add an option first.");
      return;
    }
    const random = Math.floor(Math.random() * options.length);
    alert(options[random]);
  }

  function clearOptions() {
    options = [];
    localStorage.setItem("options", JSON.stringify(options));
    options = [...options];
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
    {#if options.length === 0}
      <p class={warningText}>Please add an option first.</p>
    {:else}
      <button class={clearButton} on:click={clearOptions}>Clear</button>
    {/if}
    <form class={inputgroup}>
      <input class={input} bind:value autofocus placeholder="Add an Option" />
      <button class={innerButton} on:click={addOption} type="submit">Add</button
      >
    </form>
    <p class={footerText}>Made with ♥ by cinderjk</p>
  </div>
</div>
