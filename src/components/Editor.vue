<script setup lang="ts">
import { useEditor, EditorContent, BubbleMenu } from '@tiptap/vue-3'
import Placeholder from '@tiptap/extension-placeholder'
import StarterKit from '@tiptap/starter-kit'
import Document from '@tiptap/extension-document'
import Text from '@tiptap/extension-text'
import Heading from '@tiptap/extension-heading'

const editor = useEditor({
  editable: true,
  content: {
    type: 'doc',
    nodes: []
  },
  extensions: [
    StarterKit.configure({
      italic: {},
      heading: {
        levels: [1, 2, 3]
      }
    }),
    Placeholder.configure({
      placeholder: 'Write something...'
    })
    // Heading.configure({
    //   levels: [1, 2, 3]
    // })
  ]
})
</script>

<template>
  <h3 contenteditable="true">Editable Subheading</h3>

  <bubble-menu :editor="editor" v-if="editor" :tippy-options="{ duration: 100 }">
    <div class="bubble-menu">
      <button
        @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }"
      >
        H1
      </button>
      <button
        @click="() => editor?.chain().focus().toggleHeading({ level: 2 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }"
      >
        H2
      </button>
      <button
        @click="() => editor?.chain().focus().toggleHeading({ level: 3 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }"
      >
        H3
      </button>
      <button
        @click="editor.chain().focus().toggleBold().run()"
        :class="{ 'is-active': editor.isActive('bold') }"
      >
        Bold
      </button>
      <button
        @click="editor.chain().focus().toggleItalic().run()"
        :class="{ 'is-active': editor.isActive('italic') }"
      >
        Italic
      </button>
      <button
        @click="editor.chain().focus().toggleStrike().run()"
        :class="{ 'is-active': editor.isActive('strike') }"
      >
        Strike
      </button>
      <button @click="editor.chain().focus()" :class="{ 'is-active': editor.isActive('strike') }">
        Strike
      </button>
      <!--      <button-->
      <!--          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}-->
      <!--      className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}-->
      <!--      >-->
      <!--      H2-->
      <!--      </button>-->
      <!--      <button-->
      <!--          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}-->
      <!--      className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}-->
      <!--      >-->
      <!--      H3-->
      <!--      </button>-->
    </div>
  </bubble-menu>

  <editor-content :editor="editor" class="editor" />
</template>

<style scoped>
.editor {
  background-color: #fff;
}
</style>
