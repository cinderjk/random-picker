<script>
  import {
    wrapper,
    title,
    subtitle,
    list,
    listItem,
    listItemText,
    listItemButton,
    inputgroup,
    input,
    button,
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
</script>

<div class={wrapper}>
  <h1 class={title}>Random Picker</h1>
  <h2 class={subtitle}>Click the button to choose a random option.</h2>

  <ul class={list}>
    {#each options as option}
      <li class={listItem}>
        <span class={listItemText}>{option}</span>
        <button class={listItemButton} on:click={deleteOption(option)}>X</button
        >
      </li>
    {/each}
  </ul>
  <div class={inputgroup}>
    <input class={input} bind:value />
    <button class={button} on:click={addOption}>Add</button>
  </div>
</div>
