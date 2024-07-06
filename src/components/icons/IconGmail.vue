<template>
    <social-button>
    <a class="social" href="mailto:agatajacyk.webdeveloper@gmail.com" target="_blank"><img class="social_media" src="/logo_gmail_envelope_letter_email_icon_143171.png"></a>
  </social-button>
    </template>
    <script>
    import SocialButton from '../../UI/DeafultButtons.vue'
    export default {
      components: {
        SocialButton
      }
    }
    </script>
        <style scoped>
        @media (max-width: 1400px) {
        img {
          width: 30px;
        }
      }
        </style>