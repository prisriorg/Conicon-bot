import {
  isMainButtonMounted,
  mainButton,
  mountMainButton,
  popup,
  unmountMainButton,
} from "@telegram-apps/sdk-react";

export const openDialog = (title: string, desc: string, button: string) => {
  if (popup.open.isAvailable()) {
    // popup.isOpened() -> false
    popup.open({
      title: title,
      message: desc,
      buttons: [{ id: "my-id", type: "default", text: button }],
    });
  }
};

export const showButton = () => {
  if (mountMainButton.isAvailable()) {
    mountMainButton();
    if (isMainButtonMounted()) {
      mainButton.setParams({
        backgroundColor: "#000000",
        hasShineEffect: true,
        isEnabled: true,
        isLoaderVisible: false,
        isVisible: true,
        text: "My text",
        textColor: "#ffffff",
      });
    }
    unmountMainButton();
  }
};
