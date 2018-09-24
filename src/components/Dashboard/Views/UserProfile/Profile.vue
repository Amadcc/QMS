<template>
  <v-app>
    <div class="main">
      <b-card-group class="t-chart">
          <b-card border-variant="secondary" header-bg-variant="secondary" header-text-variant="white" header-border-variant="secondary" header="Edit User" class="text-center chart-card">
            <div class="e-main">
              <div class="e-profile">
                <h4 class="e-name">RESTAURANT NAME</h4>
                <b-form-input v-model="text" type="text" placeholder="Restaurant Name"></b-form-input>
              </div>

              <div class="e-profile">
                <h4 class="e-name">USERNAME</h4>
                <b-form-input v-model="text1" type="text" placeholder="First Name"></b-form-input>
              </div>

              <div class="e-profile">
                <h4 class="e-name">EMAIL</h4>
                <b-form-input v-model="text2" type="text" placeholder="Last Name"></b-form-input>
              </div>

              <div class="e-profile1">
                <h4 class="e-name">FIRST NAME</h4>
                <b-form-input v-model="text3" type="text" placeholder="First Name"></b-form-input>
              </div>

              <div class="e-profile1">
                <h4 class="e-name">LAST NAME</h4>
                <b-form-input v-model="text4" type="text" placeholder="Last Name"></b-form-input>
              </div>

              <div class="e-profile2">
                <h4 class="e-name">ADDRESS</h4>
                <b-form-input v-model="text5" type="text" placeholder="Address"></b-form-input>
              </div>

              <div class="e-profile">
                <h4 class="e-name">CURRENT PASSWORD</h4>
                <b-form-input v-model="text6" type="password" placeholder="Last Name"></b-form-input>
              </div>

              <div class="e-profile">
                <h4 class="e-name">NEW PASSWORD</h4>
                <b-form-input v-model="text7" type="password" placeholder="Last Name"></b-form-input>
              </div>

              <div class="e-profile">
                <h4 class="e-name">CONFIRM PASSWORD</h4>
                <b-form-input v-model="text8" type="password" placeholder="Last Name"></b-form-input>
              </div>
            </div>

            <div slot="footer">
              <v-btn to="" color="blue darken-1" flat @click.native="">Update Profile</v-btn>
            </div>
          </b-card>
      </b-card-group>
      <b-card-group class="mb-3">
          <b-card border-variant="info" header-bg-variant="info" header-text-variant="white" header-border-variant="info" header="Profile" class="text-center r-card">
            <img slot="image" src="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400" alt="..."/>
            <div class="author">
              <img class="avatar border-gray" src="../../../../../static/img/f1.jpg" alt="..."/>
              <h4 class="title">Mike Andrew<br />
                <small>@michael24</small>
              </h4>
              <p>018 777-77-77</p>
              <p>blablabla@gmail.com</p>
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
      text: 'Nandos',
      text1: 'michael24',
      text2: 'blablabla@gmail.com',
      text3: 'Mike',
      text4: 'Andrew',
      text5: 'Malaysia, Kuala Lumpur',
      text6: 'michael24',
      text7: 'michael24',
      text8: 'michael24'
    }
  },
  name: 'app'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../../../../assets/css/UserProfile.css';
</style>
