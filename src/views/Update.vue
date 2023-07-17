<script lang="ts" setup>
import { ref } from "vue";
import { useUserStore } from "@/stores/user";
import Footer from "@/components/footer.vue";
import Navbar from "@/components/navbar.vue";

const userStore = useUserStore();
const user = ref(userStore.user);

const count = ref(0);
const fileInputRef = ref(null);
const selectedFile = ref(null);
const openFileInput = () => {
  count.value++;
  fileInputRef.value.click();
};

const handleFileInput = (event: any) => {
  selectedFile.value = event.target.files[0];
};
</script>

<template>
  <main>
    <Navbar active="my-profile" />
    <div class="back" @click="$router.go(-1)">
      <img src="/arrowLeft.svg" alt="arrow-left">
      <p>Back</p>
    </div>
    <div class="window">
      <header>
        <div>
          <p class="header-text">Change Info</p>
          {{ user.photo }}
          {{ count}}
          <p class="temp">Changes will be reflected to every services</p>
        </div>
      </header>
      <div class="box" @click="openFileInput">
        <img v-if="user.photo" :src="user.photo" class="back-image" alt="avatar">
        <div v-else class="back-image"></div>
        <img src="/camera.svg" alt="camera" class="camera">
      </div>
      <input type="file" id="profile-image" ref="fileInput" style="display: none" @change="handleFileInput">
      <div class="info">
        <div>Name</div>
        <input type="text" placeholder="Enter your name...">
      </div>
      <div class="info">
        <div>Bio</div>
        <textarea placeholder="Enter your bio..."></textarea>
      </div>
      <div class="info">
        <div>Phone</div>
        <input type="text" placeholder="Enter your phone...">
      </div>
      <div class="info">
        <div>Email</div>
        <input type="text" placeholder="Enter your email...">
      </div>
      <div class="info">
        <div>Password</div>
        <input type="text" placeholder="Enter your new password...">
      </div>
      <div class="save"><button>Save</button></div>
    </div>
    <Footer type="profile"/>
  </main>
</template>

<style scoped lang="scss">
main {
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  width: 100vw;
  background-color: #f3f3f3;
}

.profile-nav {
  width: 100vw;
  // overflow: auto;
  max-width: 1324px;
  margin: 20px auto 0;
  display: flex;
  justify-content: space-between;
}

.profile {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 11px;
  img {
    width: 32px;
    height: 32px;
    border-radius: 8px;
  }
  .visible {
    width: 196px;
    margin-right: 10%;
    z-index: 1;
    padding: 12px;
    gap: 2px;
    display: flex;
    flex-direction: column;
    top: 100%;
    right: 0;
    margin-top: 10px;
    border-radius: 12px;
    border: 1px solid #E0E0E0;
    background: #FFF;
    list-style: none;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
    :hover {
      background: #555555;
    }
  }
  .drop-option {
    padding: 12px;
    display: flex;
    align-items: center;
    gap: 10px;
    border-radius: 8px;
    cursor: pointer;
  }
  .active {
    background: #F2F2F2 !important;
  }
  hr {
    border: 1px solid #E0E0E0;
    margin: 4px 0;
  }
}

.rotate-icon {
  transition: transform 0.3s;
  transform: rotate(-180deg);
}

.rotate-icon.rotate {
  transform: rotate(0deg);
}

.window {
  width: 70%;
  border-radius: 12px;
  border: 1px solid #E0E0E0;
  max-width: 1024px;
}

.header-text {
  font-size: 24px;
  font-weight: 500;
  letter-spacing: -0.84px;
  margin-bottom: 8px;
}

.temp {
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.455px;
  color: #828282;
}

header {
  padding: 0 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
}

.box {
  width: 72px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 50px 32px;
  cursor: pointer;
  position: relative;
  .camera {
    z-index: 1;
  }
  .back-image {
    top: 0;
    left: 0;
    width: 72px;
    height: 72px;
    border-radius: 8px;
    background: #E0E0E0;
    position: absolute;
  }
}

button {
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.56px;
  color: #828282;
  padding: 8px 36px;
  border-radius: 12px;
  border: 1px solid #828282;
}

.info {
  text-align: left;
  padding: 0 50px;
  margin-bottom: 24px;
  input {
    width: 80%;
    max-width: 420px;
    margin-top: 4px;
    background: transparent;
    border-radius: 12px;
    border: 1px solid #828282;
    padding: 17px;
  }
  textarea {
    font-family: Noto Sans, sans-serif;
    width: 80%;
    max-width: 420px;
    margin-top: 4px;
    background: transparent;
    border-radius: 12px;
    border: 1px solid #828282;
    padding: 17px;
    resize: none;
  }
  ::placeholder {
    color: #BDBDBD;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.455px;
  }
  :focus {
    outline: none;
  }
}

.save {
  padding: 0 50px;
  margin-bottom: 60px;
  display: flex;
  button {
    padding: 8px 24px;
    border-radius: 8px;
    border: none;
    background: #2F80ED;
    color: #FFF;
    cursor: pointer;
  }
}

.link {
  color: #2D9CDB;
  cursor: pointer;
}

.back {
  width: 70%;
  max-width: 1024px;
  height: 24px;
  display: flex;
  align-items: center;
  color: #2D9CDB;
  cursor: pointer;
  margin-bottom: 28px;
  margin-top: 30px;
}
</style>
