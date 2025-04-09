<template>
    <div class="flex flex-col min-h-screen">
      <!-- Header -->
      <HeaderComponent />
  
      <!-- Main Content -->
      <main class="flex-grow">
        <slot></slot>
      </main>
  
      <!-- Footer -->
      <FooterComponent />
    </div>
  </template>
  