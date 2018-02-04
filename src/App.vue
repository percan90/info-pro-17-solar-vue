<template>
  <div id="app" class="wrapper">

  <header class="main-header">
    <!-- Logo -->
    <a href="dashboard.html" class="logo">
      <!-- mini logo for sidebar mini 50x50 pixels -->
      <span class="logo-mini"><b>S</b></span>
      <!-- logo for regular state and mobile devices -->
      <span class="logo-lg"><b>Solar</b></span>
    </a>
    <!-- Header Navbar: style can be found in header.less -->
    <nav class="navbar navbar-static-top">
      <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
        <span class="sr-only">Toggle navigation</span>
      </a>
    </nav>
  </header>
  <aside class="main-sidebar">
    <section class="sidebar">
      <!-- Sidebar user panel -->
      <div class="user-panel">
        <div class="pull-left image">
          <img src="../static/img/avatar.png" class="img-circle" alt="User Image">
        </div>
        <div class="pull-left info">
          <p>Ivan</p>
          <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
        </div>
      </div>

      <ul class="sidebar-menu" data-widget="tree">
        <li class="header">NAVIGATION</li>
        <router-link to="/" exact tag="li" class="treeview">
            <a><i class="fa fa-dashboard"></i> <span>Dashboard</span></a>
        </router-link>
        </li>

        <!-- <router-link to="/settings" exact tag="li" class="treeview">
            <a><i class="fa fa-gears"></i> <span>Settings</span></a>
        </router-link> -->
        <router-link to="/history" exact tag="li" class="treeview">
            <a><i class="fa fa-arrow-circle-right"></i> <span>History</span></a>
        </router-link>
      </ul>

    </section>
    <!-- /.sidebar -->
  </aside>

  <div class="content-wrapper">
      <!-- Content Header (Page header) -->
      <router-view/>
      <!-- /.content -->
  </div>

  <footer class="main-footer">
    <div class="pull-right hidden-xs">
      <b>Version</b> 0.1
    </div>
    <strong>Copyright &copy; 2018 <a href="#">Solar</a>.</strong> All rights reserved.
  </footer>
</div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
