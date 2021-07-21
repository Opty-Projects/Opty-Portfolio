<template>
  <v-data-table
    class="appBackground"
    :dark="themeService.dark"
    :search="search"
    :headers="headers"
    :items="courses"
    group-by="Branch"
    hide-default-footer
    disable-pagination
    :mobile-breakpoint="1200"
  >
    <template v-slot:top>
      <v-container fluid>
        <v-card-title v-bind:style="cardTitleStyle">
          <div class="appText">Computer Science & Engineering</div>
          <v-spacer />
          <div class="mx-2">
            <span class="appText">Weighted Average</span>
            <v-chip
              class="appText mx-2 pa-6 rounded-0"
              v-text="weightedAVG.toFixed(1)"
              v-bind:style="getGradeStyle(weightedAVG)"
            />
          </div>
          <v-spacer />
          <v-switch v-model="cDetails" label="Courses Details" flat />
          <v-spacer />
          <v-text-field
            v-model="search"
            append-icon="$search"
            label="Search"
            single-line
            hide-details
          />
        </v-card-title>
      </v-container>
    </template>

    <template v-slot:[`item.Name`]="{ item }">
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <a
            :href="item.Href"
            target="_blank"
            v-bind="attrs"
            v-on="on"
            v-text="item.Name"
          />
        </template>
        <span>Course Page</span>
      </v-tooltip>
    </template>

    <template v-slot:[`item.Github`]="{ item }">
      <v-tooltip v-if="item.Github" bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            :href="item.Github"
            target="_blank"
            v-bind="attrs"
            v-on="on"
            icon
          >
            <font-awesome-icon
              class="bodyIcon fa-2x periodicallySpinHover"
              :icon="['fab', 'github']"
            />
          </v-btn>
        </template>
        <span>Projects Repository</span>
      </v-tooltip>
    </template>

    <template v-slot:[`item.Grade`]="{ item }">
      <v-chip
        class="appText pa-6 rounded-0"
        v-bind:style="getGradeStyle(item.Grade)"
        v-text="item.Grade"
      />
    </template>

    <template v-slot:[`item.ECTS`]="{ item }">
      <span class="appText" v-text="item.ECTS.toFixed(1)" />
    </template>

    <template v-slot:[`item.Period`]="{ item }">
      <span class="appText" v-text="item.Period" />
    </template>

    <template v-slot:[`item.Year`]="{ item }">
      <span class="appText" v-text="item.Year" />
    </template>
  </v-data-table>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { PropType } from "vue";
import { DataTableHeader } from "vuetify";
import Style from "@/models/Style";
import Course from "@/models/Course";
import ThemeService from "@/services/ThemeService";
import DeviceService from "@/services/DeviceService";

@Component
export default class DegreeTable extends Vue {
  @Prop({ type: Object as PropType<Course[]>, required: true })
  readonly courses!: Course[];
  readonly weightedAVG = this.calcWeightedAverage();
  readonly themeService = ThemeService.singleton;
  readonly deviceService = DeviceService.singleton;
  cDetails = false;
  search = "";
  readonly mainHeaders: DataTableHeader[] = [
    {
      text: "Course",
      value: "Name",
      align: "start",
    },
    {
      text: "Projects",
      value: "Github",
      align: "center",
      sortable: false,
      filterable: false,
    },
    {
      text: "Grade [0 - 20]",
      value: "Grade",
      align: "center",
    },
    {
      text: "Period",
      value: "Period",
      align: "center",
    },
  ];
  readonly detailHeaders: DataTableHeader[] = [
    {
      text: "Year",
      value: "Year",
      align: "center",
    },
    {
      text: "ECTS",
      value: "ECTS",
      align: "center",
    },
  ];

  get headers(): DataTableHeader[] {
    return this.cDetails
      ? [...this.mainHeaders, ...this.detailHeaders]
      : this.mainHeaders;
  }

  getGradeStyle(grade: number): Style {
    const style: Style = {
      fontSize: "large",
      fontWeight: "normal",
    };
    if (grade >= 17.5) {
      style.backgroundColor = "rgba(75, 175, 80, 0.6)";
    } else if (grade >= 13.5) {
      style.backgroundColor = "rgba(205, 220, 55, 0.6)";
    } else if (grade >= 9.5) {
      style.backgroundColor = "rgba(255, 195, 5, 0.6)";
    } else {
      style.backgroundColor = "rgba(255, 85, 35, 0.6)";
    }
    return style;
  }

  calcWeightedAverage(): number {
    let acc = 0;
    let ECTS = 0;
    this.courses.forEach((course: Course) => {
      acc += course.Grade * course.ECTS;
      ECTS += course.ECTS;
    });
    return acc / ECTS;
  }

  get cardTitleStyle(): Style {
    return this.deviceService.inMobile
      ? {
          fontSize: "medium",
          lineHeight: 3,
        }
      : {
          fontSize: "large",
        };
  }
}
</script>

<style scoped>
a {
  font-size: medium;
  text-decoration: none;
}

tr:hover .periodicallySpinHover {
  animation: periodicallySpin 10s linear infinite;
}
</style>
