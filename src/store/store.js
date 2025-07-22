import { create } from "zustand";
import productThumbnail1 from "../assets/images/image-product-1.jpg";
import productThumbnail2 from "../assets/images/image-product-2.jpg";
import productThumbnail3 from "../assets/images/image-product-3.jpg";
import productThumbnail4 from "../assets/images/image-product-4.jpg";

const useCartStore = create((set) => ({
  cart: 0,
  addItem: (itemCount) => set((state) => ({ cart: state.cart + itemCount })),
  resetCart: () => set({ cart: 0 }),
}));

const useOverlayStore = create((set) => ({
  overlay: false,
  changeOverlay: (value) => set((state) => ({ overlay: value })),
}));

const useProductImageStore = create((set) => ({
  images: [
    { id: 1, image: productThumbnail1, selected: true },
    { id: 2, image: productThumbnail2, selected: false },
    { id: 3, image: productThumbnail3, selected: false },
    { id: 4, image: productThumbnail4, selected: false },
  ],
  selectedImage: productThumbnail1,
  nextDisabled: false,
  prevDisabled: true,
  changeImage: (id) =>
    set((state) => {
      const updated = state.images.map((img) =>
        img.id === id ? { ...img, selected: true } : { ...img, selected: false }
      );
      const selected = updated.find((img) => img.selected);
      return {
        images: updated,
        selectedImage: selected.image,
        nextDisabled: selected.id === state.images.length,
        prevDisabled: selected.id === 1,
      };
    }),
  nextImage: () =>
    set((state) => {
      const current = state.images.find((img) => img.selected);
      if (!current) return {};
      if (current.id < state.images.length) {
        const newId = current.id + 1;
        const updated = state.images.map((img) =>
          img.id === newId
            ? { ...img, selected: true }
            : { ...img, selected: false }
        );
        return {
          images: updated,
          prevDisabled: false,
          nextDisabled: newId === state.images.length,
          selectedImage: updated.find((img) => img.selected)?.image,
        };
      }
      return {};
    }),
  prevImage: () =>
    set((state) => {
      const current = state.images.find((img) => img.selected);
      if (!current) return {};
      if (current.id > 1) {
        const newId = current.id - 1;
        const updated = state.images.map((img) => ({
          ...img,
          selected: img.id === newId,
        }));
        return {
          images: updated,
          prevDisabled: newId === 1,
          nextDisabled: false,
          selectedImage: updated.find((img) => img.selected)?.image,
        };
      }

      return {
        prevDisabled: true,
      };
    }),
}));
export { useCartStore, useOverlayStore, useProductImageStore };
