
import { create } from 'zustand';

const initialState = (window as any).__DNA_STATE__ || {};

// Синхронизируем тему из localStorage до создания стора
const savedTheme = typeof localStorage !== 'undefined' ? localStorage.getItem('dna-theme-pref') : null;
if (savedTheme && initialState.globalSettings?.['GL10']?.params?.[6]) {
  initialState.globalSettings['GL10'].params[6].value = savedTheme;
}

interface ProductionState {
  contentBlocks: any[];
  globalSettings: any;
  currentLanguage: string;
  translationCache: Record<string, string>;
  setTranslation: (key: string, value: string) => void;
  setCurrentLanguage: (lang: string) => void;
  toggleSiteTheme: () => void;
  getPageData: (pageName?: string) => any[];
  // Добавлены заглушки для методов редактора, чтобы компоненты не падали
  selectedBlockId: string | null;
  setSelectedBlock: (id: string | null) => void;
  viewportMode: string;
  isPreviewMode: boolean;
  gridMode: string;
  cycleGrid: () => void;
  uiTheme: any;
}

export const useStore = create<ProductionState>((set, get) => ({
  contentBlocks: initialState.pages?.home || 
                 initialState.pages?.['home'] || 
                 initialState.contentBlocks || 
                 (initialState.pages ? Object.values(initialState.pages)[0] : []) || 
                 [],
  globalSettings: initialState.globalSettings || {},
  currentLanguage: initialState.currentLanguage || 'en',
  selectedBlockId: null,
  viewportMode: 'desktop',
  isPreviewMode: true,
  gridMode: 'off',
  uiTheme: initialState.uiTheme || {},

  translationCache: JSON.parse(localStorage.getItem('dna_trans_cache') || '{}'),
  
  setTranslation: (key: string, value: string) => {
    const { translationCache } = get();
    const newCache = { ...translationCache, [key]: value };
    localStorage.setItem('dna_trans_cache', JSON.stringify(newCache));
    set({ translationCache: newCache });
  },

  setCurrentLanguage: (lang: string) => set({ currentLanguage: lang }),
  
  toggleSiteTheme: () => {
    const { globalSettings } = get();
    const newSettings = JSON.parse(JSON.stringify(globalSettings));
    
    if (newSettings['GL10']?.params?.[6]) {
      const currentMode = newSettings['GL10'].params[6].value || 'Dark';
      const newMode = currentMode === 'Light' ? 'Dark' : 'Light';
      newSettings['GL10'].params[6].value = newMode;
      
      localStorage.setItem('dna-theme-pref', newMode);
      console.log('🌓 Theme mode changed to:', newMode);

      const isDark = newMode === 'Dark';
      if (newSettings['GL02']?.params) {
        if (isDark) {
          newSettings['GL02'].params[0].value = '#09090B'; // BG
          newSettings['GL02'].params[1].value = '#18181B'; // Surface
          newSettings['GL02'].params[2].value = '#3B82F6'; // Accent
          newSettings['GL02'].params[3].value = '#FFFFFF'; // Text Prim
          newSettings['GL02'].params[4].value = '#A1A1AA'; // Text Sec
          newSettings['GL02'].params[5].value = '#27272A'; // Border
        } else {
          newSettings['GL02'].params[0].value = '#FFFFFF'; // BG
          newSettings['GL02'].params[1].value = '#F4F4F5'; // Surface
          newSettings['GL02'].params[2].value = '#2563EB'; // Accent
          newSettings['GL02'].params[3].value = '#18181B'; // Text Prim
          newSettings['GL02'].params[4].value = '#71717A'; // Text Sec
          newSettings['GL02'].params[5].value = '#E4E4E7'; // Border
        }
      }
      set({ globalSettings: newSettings });
    }
  },

  getPageData: (pageName = 'home') => {
    return initialState.pages?.[pageName] || initialState.contentBlocks || [];
  },

  // Заглушки
  setSelectedBlock: () => {},
  cycleGrid: () => {}
}));
