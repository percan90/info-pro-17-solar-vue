<template>
    <div>
        <section class="content-header">
      <h3>
        Settings
        <small>Edit your system settings</small>
    </h3>
      <!-- <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
        <li class="active">Dashboard</li>
      </ol> -->
    </section>

    <!-- Main content -->
    <section class="content">
        <div class="container-settings">

              <div class="row">
                  <div class="col-lg-12 col-md-12 col-xs-12">
                      <h3>Choose battery type<br>
                      <small>Be careful! Wrong type can destroy battery.</small></h3>
                  </div>
                  <div class="col-lg-6 col-md-12 col-xs-12">
                      <div class="form-check form-check-inline">
                        <label class="form-check-label">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="batteryType1" value="batteryType1"> <h4 class="battery">Sealed Batteries (Lead-Acid) <small>Default</small></h4>
                        </label>
                      </div>
                      <div class="form-check form-check-inline">
                        <label class="form-check-label">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="batteryType2" value="batteryType2"> <h4 class="battery">Deep Cycle Batteries <small>We will notify you when to check battery</small></h4>
                        </label>
                      </div>
                      <div class="form-check form-check-inline">
                        <label class="form-check-label">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="batteryType3" value="batteryType3"> <h4 class="battery">OGiV Batteries</h4>
                        </label>
                      </div>
                      <div class="form-check form-check-inline">
                        <label class="form-check-label">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="batteryType4" value="batteryType4"> <h4 class="battery">Traction <small>Double check your battery before selecting this option</small></h4>
                        </label>
                      </div>
                  </div>
              </div>
        </div>
    </section>

    <section class="content">
        <div class="container-settings">

              <div class="row">
                  <div class="col-lg-12 col-md-12 col-xs-12">
                      <h3>Enter your battery capacity<br>
                      <small>By this, you can see battery time remaining</small></h3>
                  </div>
                  <div class="col-lg-3 col-md-12 col-xs-12">
                      <div class="form-group">
                          <label for="usr">Capacity:</label>
                          <input type="text" class="form-control" id="capacity">
                        </div>
                  </div>
              </div>
        </div>
    </section>
</div>
</template>

<script>
export default {
  name: 'Settings',
  data () {
    return {

    }
},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
