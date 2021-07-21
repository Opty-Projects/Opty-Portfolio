<template>
  <courses-table :courses="courses" />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CoursesTable from "@/components/CoursesTable.vue";
import Courses from "@/assets/Data/Courses/BSc.json";

@Component({
  components: { CoursesTable },
})
export default class BSc extends Vue {
  readonly courses = Courses;
}
</script>
