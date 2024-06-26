<template>
    <div class="q-pa-md q-gutter-sm flex-between aa">
      <div class="nav">
        <div class="dropdown-box">
          <q-btn-dropdown flat label="Daftar Tugas ILHAM" color="blue-indigo-5" text-color="white">
            <q-list style="min-width: 160px">
              <q-item v-for="task in tasks" :key="task.id" clickable v-ripple @click="openProject(task.url)">
                <q-item-section>{{ task.name }}</q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Navbar',
    data() {
      return {
        tasks: [
          { id: 1, name: 'Tugas1', url: 'https://ilham-project-cv.vercel.app' },
          { id: 2, name: 'Tugas2', url: 'https://tugas2-pbk-223510283.vercel.app' },
          { id: 3, name: 'Tugas3', url: 'https://tugas3-pbk-223510283.vercel.app' },
          { id: 4, name: 'Tugas4', url: 'https://tugas4-pbk-223510283.vercel.app' },
          { id: 5, name: 'Tugas5', url: 'https://tugas5-pbk-223510283.vercel.app' },
          { id: 6, name: 'Tugas6', url: 'https://tugas6-pbk-223510283.vercel.app' },
          { id: 7, name: 'Tugas7', url: 'https://tugas7-pbk-223510283.vercel.app' },
        ],
      };
    },
    methods: {
      openProject(url) {
        window.open(url, '_blank');
      },
    },
  };
  </script>
  
  <style>
  .q-pa-md.q-gutter-sm.flex-between.aa {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .nav {
    display: flex;
    align-items: center;
  }
  
  .dropdown-box {
    border: 1px solid #ddd;
    padding: 10px;
    background-color: #0F1035;
    border-radius: 4px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  </style>
  