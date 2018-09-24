<template>
  <v-app>
    <div class="main">
      <b-card-group class="t-chart">
          <b-card border-variant="secondary" header-bg-variant="secondary" header-text-variant="white" header-border-variant="secondary" header="Scan Your Appointment Card Here" class="text-center chart-card">
            <div class="e-main">
              <div class="e-profile2">
                <b-form-input v-model="text" type="text" placeholder="Number"></b-form-input>
              </div>
            </div>
            <div slot="footer">
              <v-btn to="" color="blue darken-1" flat @click.native="">On screen Keyboard</v-btn>
            </div>
          </b-card>
      </b-card-group>
    </div>
    <v-footer style="background-color:#f8f9fa">
      <v-spacer></v-spacer>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  data () {
    return {

    }
  },
  name: 'app'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../../../assets/css/UserProfile.css';
</style>
