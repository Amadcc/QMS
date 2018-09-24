<template>
  <v-app>
    <div class="main">
      <b-card-group class="t-chart">
          <b-card border-variant="secondary" header-bg-variant="secondary" header-text-variant="white" header-border-variant="secondary" header="Reception" class="text-center chart-card">
            <b-table striped :items="items" :fields="fields">
            </b-table>
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
      fields: [ 'QNo', 'Location', 'ID', 'Name', 'Contact_No', 'Arrival_Time', 'Appt_Time', 'Staff', 'Remark' ],
      items: [
        { ID: 40, QNo: '00001', Location: 'Macdonald', Name: 'Max', Contact_No: '019 775-47-21', Arrival_Time: '10:30 AM', Appt_Time: '10:30 AM', Staff: 'John', Remark: 'Dying'},
        { ID: 21, QNo: '00002', Location: 'Shaw', Name: 'Max',  Contact_No: '019 775-47-21', Arrival_Time: '12:30 AM', Appt_Time: '10:30 AM', Staff: 'Max', Remark: 'Dying' },
        { ID: 89, QNo: '00003', Location: 'Wilson', Name: 'Max',  Contact_No: '019 775-47-21', Arrival_Time: '05:30 PM', Appt_Time: '10:30 AM', Staff: 'Louie', Remark: 'Dying' }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../../../assets/css/Menu.css';
</style>
