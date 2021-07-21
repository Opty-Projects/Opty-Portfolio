import Vue from "vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
  faBars,
  faIgloo,
  faUniversity,
  faUserGraduate,
  faProjectDiagram,
  faIdCardAlt,
  faCertificate,
  faEnvelope,
  faPhoneAlt,
  faArrowDown,
  faChevronRight,
  faChevronDown,
  faLock,
  faCloud,
  faMoon,
  faSearch,
  faSortUp,
  faCaretDown,
  faMinus,
  faPlus,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFortAwesome,
  faFacebookSquare,
  faGithub,
  faLinkedin,
  faDiscord,
  faVuejs,
} from "@fortawesome/free-brands-svg-icons";

Vue.component("font-awesome-icon", FontAwesomeIcon);

library.add(
  faBars,
  faIgloo,
  faUniversity,
  faUserGraduate,
  faProjectDiagram,
  faIdCardAlt,
  faCertificate,
  faEnvelope,
  faPhoneAlt,
  faArrowDown,
  faChevronRight,
  faChevronDown,
  faLock,
  faCloud,
  faMoon,
  faSearch,
  faSortUp,
  faCaretDown,
  faMinus,
  faPlus,
  faTimes,
  faFortAwesome,
  faFacebookSquare,
  faGithub,
  faLinkedin,
  faDiscord,
  faVuejs
);

const CUSTOM_ICONS = {
  moon: {
    component: FontAwesomeIcon,
    props: {
      icon: ["fas", "moon"],
    },
  },
  search: {
    component: FontAwesomeIcon,
    props: {
      icon: ["fas", "search"],
    },
  },
};

export { CUSTOM_ICONS };
