Vue bindings for [Qwick Maffs](https://edave64.github.io/qwick-maffs/)

# Usage

```sh
npm install qwick-maffs-vue
```

```vue
<script setup lang="ts">
import QwickMaffs from "qwick-maffs-vue";
import { ref } from "vue";

const v = ref(3.0);
</script>

<template>
	<QwickMaffs v-model="v" />
</template>
```
