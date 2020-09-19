<template>
  <div class="form-container">
    <div class="contact-form">
      <h1>Contact Us</h1>
      <form action="/" method="POST">
        <Label label="Your Name (Required)" :for="'contact-name'" />
        <Input type="text" name="contact-name" id="contact-name" />
        <Label label="Your Email (Required)" :for="'contact-email'" />
        <Input type="email" name="contact-email" id="contact-email" />
        <Label label="Subject" :for="'contact-subject'" />
        <Input type="text" name="contact-subject" id="contact-subject" />
        <Label label="Message" :for="'contact-message'" />
        <TextArea name="contact-message" id="contact-message" />
        <Button btnText="Send" />
      </form>
    </div>
  </div>
</template>

<script>
import Label from "./Forms/Label.vue";
import TextArea from "./Forms/TextArea.vue";
import Input from "./Forms/Input.vue";
import Button from "./Components/Button.vue";

export default {
  name: "ContactForm",
  props: {},
  components: {
    Label,
    Input,
    TextArea,
    Button,
  },
};
</script>

<style scoped>
.form-container {
  width: 100%;
  height: 100%;
  padding: 40px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.contact-form {
  width: 100%;
  max-width: 700px;
  padding: 32px;
  background-color: var(--white);
  border: var(--primary-border);
  border-radius: var(--primary-radius);
}
.contact-form h1 {
  margin-bottom: 20px;
}
</style>
