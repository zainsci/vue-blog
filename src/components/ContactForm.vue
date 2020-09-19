<template>
  <div class="form-container">
    <div class="signup-form">
      <h1>Contact Us</h1>
      <form action="/" method="POST">
        <Label label="Your Name (Required)" :for="'contact-name'" />
        <Input type="text" name="contact-name" id="contact-name" />
        <Label label="Your Email (Required)" :for="'contact-email'" />
        <Input type="email" name="contact-email" id="contact-email" />
        <Label label="Subject" :for="'contact-subject'" />
        <Input type="text" name="contact-subject" id="contact-subject" />
        <Button btnText="Send" />
      </form>
    </div>
  </div>
</template>

<script>
import Label from "./Forms/Label.vue";
import Input from "./Forms/Input.vue";
import Button from "./Components/Button.vue";

export default {
  name: "ContactForm",
  props: {},
  components: {
    Label,
    Input,
    Button,
  },
};
</script>

<style scoped>
.form-container {
  width: 100%;
  height: calc(100vh - 70px);
  display: flex;
  justify-content: center;
  align-items: center;
}
.signup-form {
  width: 100%;
  max-width: 400px;
  padding: 32px;
  background-color: var(--white);
  border: var(--primary-border);
  border-radius: var(--primary-radius);
}
.signup-form h1 {
  margin-bottom: 20px;
}
</style>
