<template>
  <v-app>
    <div class="main">
      <b-card-group class="t-chart">
          <b-card border-variant="secondary" header-bg-variant="secondary" header-text-variant="white" header-border-variant="secondary" header="Now Serving" class="text-center chart-card">
            <div class="numerator">
              <div class="number" data-num="0">
                <div class="n1">
                  <div class="top">1</div>
                  <div class="bottom"><div>1</div></div>
                </div>
                <div class="n0">
                  <div class="top">0</div>
                  <div class="bottom"><div>0</div></div>
                </div>
              </div>
              <div class="number" data-num="0">
                <div class="n1">
                  <div class="top">1</div>
                  <div class="bottom"><div>1</div></div>
                </div>
                <div class="n0">
                  <div class="top">0</div>
                  <div class="bottom"><div>0</div></div>
                </div>
              </div>
              <div class="number" data-num="2">
                <div class="n3">
                  <div class="top">3</div>
                  <div class="bottom"><div>3</div></div>
                </div>
                <div class="n2">
                  <div class="top">2</div>
                  <div class="bottom"><div>2</div></div>
                </div>
              </div>
              <div class="number" data-num="4">
                <div class="n5">
                  <div class="top">5</div>
                  <div class="bottom"><div>5</div></div>
                </div>
                <div class="n4">
                  <div class="top">4</div>
                  <div class="bottom"><div>4</div></div>
                </div>
              </div>
            </div>
        </b-card>
      </b-card-group>
      <b-card-group class="rt-chart">
          <b-card border-variant="secondary" header-bg-variant="secondary" header-text-variant="white" header-border-variant="secondary" header="Previous Customer" class="text-center chart-card">
            <b-table striped hover :items="items"></b-table>
        </b-card>
      </b-card-group>
      <b-card-group class="t-chart">
          <b-card border-variant="secondary" header-bg-variant="secondary" header-text-variant="white" header-border-variant="secondary" header="Room" class="text-center chart-card">
            <div class="numerator">
              <div class="number" data-num="2">
                <div class="n3">
                  <div class="top">3</div>
                  <div class="bottom"><div>3</div></div>
                </div>
                <div class="n2">
                  <div class="top">2</div>
                  <div class="bottom"><div>2</div></div>
                </div>
              </div>
            </div>
        </b-card>
      </b-card-group>
    </div>
  </v-app>
</template>

<script>
const items = [
  {PreviousCustomer: 4000, Rooms: '1' },
  {PreviousCustomer: 2001, Rooms: '2' },
  {PreviousCustomer: 8009, Rooms: '3' }
]

export default {
  data () {
    return {
      items: items
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../../../assets/css/num.css';
  @import '../../../assets/css/Menu.css';
</style>
