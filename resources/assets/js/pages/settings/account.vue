<template>
  <div class="row">
    <div class="col-md-3">
      <div class="card card-settings">
        <div class="card-header">
          Settings
        </div>
        <div class="card-block px-0 py-0">
          <ul class="nav flex-column nav-pills">
            <li v-for="tab in tabs" class="nav-item">
              <router-link :to="{ name: tab.route }" class="nav-link" active-class="active">
                <icon :name="tab.icon"></icon>
                {{ tab.name }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col-md-9">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  loading: false,

  data: () => ({
    tabs: [
      {
        icon: 'user',
        name: 'Profile',
        route: 'settings.profile'
      },
      {
        icon: 'lock',
        name: 'Security',
        route: 'settings.security'
      },
      {
        icon: 'lock',
        name: 'DangerZone',
        route: 'settings.dangerzone'
      }
    ]
  })
}
</script>
