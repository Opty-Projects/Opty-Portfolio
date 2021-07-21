<template>
  <courses-table :courses="courses" />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CoursesTable from "@/components/CoursesTable.vue";
import Courses from "@/assets/Data/Courses/MSc.json";

@Component({
  components: { CoursesTable },
})
export default class MSc extends Vue {
  readonly courses = Courses;
}
</script>
