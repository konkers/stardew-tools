<script lang="ts">
	import { FileDropzone } from '@skeletonlabs/skeleton';

	let files: FileList;

	function onChangeHandler(e: Event): void {
		console.log('file data:', e);
		console.log(files);
	}
</script>

<FileDropzone name="files" bind:files on:change={onChangeHandler} />
