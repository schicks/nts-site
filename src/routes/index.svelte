<script lang="ts" context="module">
  export async function load({session: {posts}}) {
    return {
      props: {posts}
    }
  }
</script>
<script lang="ts">
  export let posts: {slug: string}[]
</script>

<h1>Home Page</h1>
<ul>
{#each posts as post}
  <li>
    <a href={`sketches/${post.slug}`}>{post.slug}</a>
  </li>
{/each}
</ul>

<style>
  ul {
    list-style: none;
  }
  li {
    margin-bottom: 6px;
  }
</style>