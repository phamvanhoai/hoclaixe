import Storage from 'expo-sqlite/kv-store';

const APP_STATE_KEY = '@hoclaixe/app-state';

export async function loadAppState() {
  try {
    const raw = await Storage.getItem(APP_STATE_KEY);
    if (!raw) {
      return null;
    }

    return JSON.parse(raw);
  } catch (error) {
    console.warn('Không thể đọc dữ liệu app:', error);
    return null;
  }
}

export async function saveAppState(value) {
  try {
    await Storage.setItem(APP_STATE_KEY, JSON.stringify(value));
  } catch (error) {
    console.warn('Không thể lưu dữ liệu app:', error);
  }
}