
<template>
    <div class="bg"></div>
    <div class="loader">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </template>
  
  <style scoped>
  * {
    margin: 0px;
    padding: 0px;
    border: 0px;
  }
  
  html,
  body {
    min-height: 100%;
  }
  
  body {
    background: radial-gradient(#081534, #070d1b);
  }
  .bg{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(#081534, #070d1b);

  }
  .loader {
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    margin: auto;
    width: 175px;
    height: 100px;
    z-index: 999;
  }
  
  .loader span {
    display: block;
    background: #04c97f;
    width: 7px;
    height: 10%;
    border-radius: 14px;
    margin-right: 5px;
    float: left;
    margin-top: 25%;
  }
  
  .loader span:last-child {
    margin-right: 0px;
  }
  
  .loader span:nth-child(1) {
    animation: load 2.5s 1.4s infinite linear;
  }
  
  .loader span:nth-child(2) {
    animation: load 2.5s 1.2s infinite linear;
  }
  
  .loader span:nth-child(3) {
    animation: load 2.5s 1s infinite linear;
  }
  
  .loader span:nth-child(4) {
    animation: load 2.5s 0.8s infinite linear;
  }
  
  .loader span:nth-child(5) {
    animation: load 2.5s 0.6s infinite linear;
  }
  
  .loader span:nth-child(6) {
    animation: load 2.5s 0.4s infinite linear;
  }
  
  .loader span:nth-child(7) {
    animation: load 2.5s 0.2s infinite linear;
  }
  
  .loader span:nth-child(8) {
    animation: load 2.5s 0s infinite linear;
  }
  
  .loader span:nth-child(9) {
    animation: load 2.5s 0.2s infinite linear;
  }
  
  .loader span:nth-child(10) {
    animation: load 2.5s 0.4s infinite linear;
  }
  
  .loader span:nth-child(11) {
    animation: load 2.5s 0.6s infinite linear;
  }
  
  .loader span:nth-child(12) {
    animation: load 2.5s 0.8s infinite linear;
  }
  
  .loader span:nth-child(13) {
    animation: load 2.5s 1s infinite linear;
  }
  
  .loader span:nth-child(14) {
    animation: load 2.5s 1.2s infinite linear;
  }
  
  .loader span:nth-child(15) {
    animation: load 2.5s 1.4s infinite linear;
  }
  
  @keyframes load {
    0% {
      background: #04c97f;
      margin-top: 25%;
      height: 10%;
    }
  
    50% {
      background: #07633f;
      height: 100%;
      margin-top: 0%;
    }
  
    100% {
      background: #04c97f;
      height: 10%;
      margin-top: 25%;
    }
  }
  </style>
  