<template>
  <v-app>
    <v-navigation-drawer persistent :mini-variant="miniVariant" :clipped="clipped" v-model="drawer" enable-resize-watcher fixed app>
      <v-list two-line>
        <v-list-tile v-for="(item, i) in items" :key="i" @click="" router :to="item.link">
          <v-list-tile-action>
            <v-icon large color="teal lighten-4" v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="list-items">{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app :clipped-left="clipped">
      <v-toolbar-side-icon style="outline: none;" @click.stop="miniVariant = !miniVariant"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <div class="bala">
        <notifications group="foo" position="bottom right" />
      </div>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

export default {
  data () {
    return {
      miniVariant: true,
      clipped: true,
      drawer: true,
      items: [
        { icon: 'dashboard', title: 'Register', link: '/' },
        { icon: 'list', title: 'Reprint Q', link: '/admin/list' },
        { icon: 'cached', title: 'Change Appt', link: '/admin/numDisplay' },
        { icon: 'note_add', title: 'Q Patient', link: '/admin/kiosk' },
        { icon: 'delete_forever', title: 'Remove From Q', link: '' },
        { icon: 'swap_horiz', title: 'Transfer To', link: '' },
        { icon: 'tab', title: 'Mosaiq Appt', link: '' }
      ],
      fixed: false,
      title: 'QMS'
    }
  }
}
</script>

<style>
  @import '../../../assets/css/DashboardLayout.css';
</style>
