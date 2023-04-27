<template>
  <div class="ml-16">
    <v-row>
      <v-col cols="12">
        <v-img
          :src="require('../assets/birdbox.png')"
          style="
          margin-top: 10%;
          max-width:600px;
          max-height:400px;
          width: auto;
          height: auto;"
        />
      </v-col>

      <v-col cols="12" class="d-flex flex-row ma-0 pa-0">
            <v-btn
              icon
              color="primary"
            >
              <v-icon>mdi-star</v-icon>
            </v-btn><v-btn
              icon
              color="primary"
            >
              <v-icon>mdi-star</v-icon>
            </v-btn><v-btn
              icon
              color="primary"
            >
              <v-icon>mdi-star</v-icon>
            </v-btn><v-btn
              icon
              color="primary"
            >
              <v-icon>mdi-star</v-icon>
            </v-btn><v-btn
              icon
              color="primary"
            >
              <v-icon>mdi-star</v-icon>
            </v-btn>
            <p class="pa-0 ml-3 mt-2 mb-0 font-weight-light">2018</p>
            <p class="pa-0 ml-3 mt-2 mb-0 font-weight-light">124 min</p>
            <v-chip
              class="mt-2 mb-0 ml-3 "
              small
            >
              Ultra HD 4k
            </v-chip>
            <v-chip
              class="ml-3 mt-2 mb-0"
              small
            >
              5.1
            </v-chip>
      </v-col>

      <v-col cols="4">
        <p class="subheading font-weight-regular">
          Entidades misteriosas invadem a Terra com sua terrível
          presença. Aqueles que as veem, se matam rapidamente.
          O mundo entra em colapso, mas uma mãe luta para
          encontrar um lugar seguro para viver com seus
          filhos.
        </p>
      </v-col>

      <v-col
        cols="12"
      >
        <v-btn
          class="black--text mr-2"
          color="white"
        >
          <v-icon color="black">mdi-play</v-icon>
            Play
        </v-btn>
        <v-btn
          color="grey"
        >
          <v-icon>mdi-alert-circle-outline</v-icon>
          Mais Informações
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'Titulo',

  data: () => ({
    ecosystem: [
      {
        text: 'vuetify-loader',
        href: 'https://github.com/vuetifyjs/vuetify-loader'
      },
      {
        text: 'github',
        href: 'https://github.com/vuetifyjs/vuetify'
      },
      {
        text: 'awesome-vuetify',
        href: 'https://github.com/vuetifyjs/awesome-vuetify'
      }
    ],
    importantLinks: [
      {
        text: 'Documentation',
        href: 'https://vuetifyjs.com'
      },
      {
        text: 'Chat',
        href: 'https://community.vuetifyjs.com'
      },
      {
        text: 'Made with Vuetify',
        href: 'https://madewithvuejs.com/vuetify'
      },
      {
        text: 'Twitter',
        href: 'https://twitter.com/vuetifyjs'
      },
      {
        text: 'Articles',
        href: 'https://medium.com/vuetify'
      }
    ],
    whatsNext: [
      {
        text: 'Explore components',
        href: 'https://vuetifyjs.com/components/api-explorer'
      },
      {
        text: 'Select a layout',
        href: 'https://vuetifyjs.com/getting-started/pre-made-layouts'
      },
      {
        text: 'Frequently Asked Questions',
        href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions'
      }
    ]
  })
}
</script>
