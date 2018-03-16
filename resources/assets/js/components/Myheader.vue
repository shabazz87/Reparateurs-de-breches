<template>
  <v-app>
    <v-toolbar dark color="blue darken-1" app>
      <v-toolbar-title style="width: 150px" class="ml-0 pl-3 mr-2">
        <router-link to="/" tag="span" style="cursor: pointer">
            <v-avatar size="45px">
              <img
                src="/media/images_animes/r2blogo.PNG" alt="Les Réparateurs de Brêches">
            </v-avatar>
          <b class="hidden-xs-only">{{ appTitle }}</b>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat @click="">
          <v-icon left dark>mdi-home</v-icon>
          Home
        </v-btn>
        <v-btn flat @click="">
          <v-icon left dark>mdi-gift</v-icon>
          About
        </v-btn>
        <v-menu open-on-hover down offset-y>
          <v-btn flat slot="activator">
            <v-icon dark>mdi-chevron-down</v-icon>
            Labels
          </v-btn>
          <v-list>
            <v-list-tile @click="" >
              <v-icon left dark>mdi-home</v-icon>
              <v-list-tile-title >Create label</v-list-tile-title>
            </v-list-tile> 
          </v-list>
        </v-menu> 
        <v-menu open-on-hover down offset-y>
          <v-btn flat slot="activator">
            <v-icon dark>mdi-chevron-down</v-icon>
            More
          </v-btn>
          <v-list>
            <v-list-tile @click="" >
              <v-icon left dark>mdi-home</v-icon>
              <v-list-tile-title >Home me</v-list-tile-title>
            </v-list-tile>
            <v-list-tile @click="" >
              <v-icon left dark>mdi-home</v-icon>
              <v-list-tile-title >Home me</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
        <v-btn flat to="">
          <v-icon left dark>mdi-logout</v-icon>
          Logout
        </v-btn>
      </v-toolbar-items>
      <v-btn flat @click.stop="sideNav = !sideNav" class="hidden-md-and-up">
        <v-icon>mdi-format-align-justify</v-icon>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer
      temporary
      class="blue darken-1"
      width="270"
      v-model="sideNav"
      :mini-variant="mini"
      dark
      app
    >
      <v-list class="pa-1">
        <v-list-tile v-if="mini" @click.stop="mini = !mini">
          <v-list-tile-action>
            <v-icon>mdi-chevron-right</v-icon>
          </v-list-tile-action>
        </v-list-tile>
        <v-list-tile avatar tag="div">
          <v-list-tile-avatar style="cursor: pointer" @click="">
            <img src="/media/images_animes/r2blogo.PNG" >
          </v-list-tile-avatar>
          <v-list-tile-content style="cursor: pointer" @click="">
            <v-list-tile-title>{{ appTitle }}</v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-btn icon @click.stop="mini = !mini">
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
      <v-list dense>
        <template v-for="item in items">
          <v-layout
            row
            v-if="item.heading"
            align-center
            :key="item.heading"
          >
            <v-flex xs6>
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-flex>
            <v-flex xs6 class="text-xs-center">
              <a href="#!" class="body-2 black--text">EDIT</a>
            </v-flex>
          </v-layout>
          <v-list-group
            v-else-if="item.children"
            v-model="item.model"
            :key="item.title"
            :prepend-icon="item.model ? item.icon : item['icon-alt']"
            append-icon=""
          >
            <v-list-tile slot="activator">
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ item.title }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile
              v-for="(child, i) in item.children"
              :key="i"
              @click=""
            >
              <v-list-tile-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ child.title }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
          <v-list-tile v-else @click="item.link" :key="item.title">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.title }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
        <v-list-tile
          v-if=""
          @click="">
          <v-list-tile-action>
            <v-icon>mdi-logout</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>Logout</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        sideNav: false,
        appTitle: 'R2B',
        mini: false,
        right: null,
        items: [
          { icon: 'mdi-home-circle', title: 'Home', link: '' },
          { icon: 'mdi-gift', title: 'About', link: '' },
          {
            icon: 'mdi-chevron-up',
            'icon-alt': 'mdi-chevron-down',
            title: 'Labels',
            model: false,
            children: [
              { icon: 'mdi-home-circle', title: 'Create label' }
            ]
          },
          {
            icon: 'mdi-chevron-up',
            'icon-alt': 'mdi-chevron-down',
            title: 'More',
            model: false,
            children: [
              { icon: 'mdi-home-circle', title: 'Home me', link: '' },
              { icon: 'mdi-home-circle', title: 'About me', link: '' }
            ]
          }
        ]
      }
    },
    computed: {
      menuItems () {
        let menuItems = [
          {icon: 'mdi-home-circle', title: 'Home', link: ''},
          {
            icon: 'mdi-gift',
            title: 'About',
            link: '',
            model: false,
            children: [
              { icon: 'mdi-developer_board', title: 'Services', link: '' },
              { icon: 'mdi-information', title: 'About', link: '' }
            ]
          }
        ]
        return menuItems
      }
    },
    methods: {
    }
  }
</script>
