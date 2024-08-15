import { makeAutoObservable } from 'mobx';
import { isMobile, isTablet } from 'lib/media';

class DeviceStore {
  isMobile = false;
  isTablet = false;

  constructor() {
    makeAutoObservable(this);
  }

  setMobileState(value) {
    this.isMobile = value;
  }

  setTabletState(value) {
    this.isTablet = value;
  }

  isDesktopState() {
    return !this.isMobile && !this.isTablet;
  }

  checkDeviceState() {
    this.setMobileState(isMobile());
    this.setTabletState(isTablet());
  }
}

export default new DeviceStore();
