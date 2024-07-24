import { defineRule } from "vee-validate";
import { required } from "@vee-validate/rules";

export default defineNuxtPlugin((nuxtApp) => {
  defineRule("required", required);
});
