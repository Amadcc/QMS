<template>
  <v-app>
    <div class="main">
      <b-card-group class="t-chart">
          <b-card border-variant="secondary" header-bg-variant="secondary" header-text-variant="white" header-border-variant="secondary" header="New Patient" class="text-center chart-card">
            <div class="e-main">
              <div class="e-profile">
                <h4 class="e-name">ID</h4>
                <b-form-input v-model="text" type="text" placeholder="Restaurant Name"></b-form-input>
              </div>

              <div class="e-profile">
                <h4 class="e-name">CONTACT</h4>
                <b-form-input v-model="text" type="text" placeholder="Number"></b-form-input>
              </div>

              <div class="e-profile">
                <h4 class="e-name">EMAIL</h4>
                <b-form-input v-model="text" type="text" placeholder="Email"></b-form-input>
              </div>

              <div class="e-profile1">
                <h4 class="e-name">FIRST NAME</h4>
                <b-form-input v-model="text" type="text" placeholder="First Name"></b-form-input>
              </div>

              <div class="e-profile1">
                <h4 class="e-name">LAST NAME</h4>
                <b-form-input v-model="text" type="text" placeholder="Last Name"></b-form-input>
              </div>

              <div class="e-profile2">
                <h4 class="e-name">ADDRESS</h4>
                <b-form-input v-model="text" type="text" placeholder="Address"></b-form-input>
              </div>

              <div class="e-profile">
                <h4 class="e-name">ARRIVAL TIME</h4>
                <b-form-input v-model="text" type="time" placeholder="Last Name"></b-form-input>
              </div>

              <div class="e-profile">
                <h4 class="e-name">APPT TIME</h4>
                <b-form-input v-model="text" type="time" placeholder="Last Name"></b-form-input>
              </div>

              <div class="e-profile">
                <h4 class="e-name">STAFF</h4>
                <b-form-input v-model="text" type="password" placeholder="Last Name"></b-form-input>
              </div>

              <div class="e-profile2">
                <h4 class="e-name">REMARK</h4>
                <b-form-input v-model="text" type="text" placeholder="Remark"></b-form-input>
              </div>
            </div>

            <div slot="footer">
              <v-btn to="" color="blue darken-1" flat @click.native="">Register</v-btn>
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
