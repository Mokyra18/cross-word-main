export interface Hint {
  number: number;
  horizontal?: string;
  vertical?: string;
}

export interface Hints {
  [key: string]: Hint;
}

export const hints: Hints = {
  "0,0": {
    number: 1,
    horizontal: "Mata uang yang digunakan di jepang",
  },
  "0,1": {
    number: 2,
    vertical:
      "Nama benua yang memiliki banyak negara dengan keberagaman budaya dan geografis",
  },
  "0,6": {
    number: 3,
    vertical: "Bahasa inggris dari telepon",
  },
  "1,4": {
    number: 4,
    horizontal: " Sebuah makhluk mitologi berkepala singa dan berbadan manusia",
  },
  "1,9": {
    number: 5,
    vertical:
      "Alat yang digunakan untuk melihat dalam tubuh manusia dengan menggunakan gelombang elektromagnetik",
  },
  "2,11": {
    number: 6,
    vertical: "Ibu Kota dari Provinsi Sulawesi Selatan",
  },
  "3,3": {
    number: 7,
    vertical:
      "Tempat umum yang biasanya menyediakan obat-obatan dan produk kesehatan untuk dijual",
  },
  "3,9": {
    number: 8,
    horizontal:
      "Norma-norma perilaku yang diwariskan secara turun-temurun dalam suatu masyarakat",
  },
  "4,1": {
    number: 9,
    horizontal:
      "Satuan untuk mengukur kuat arus listrik dalam sistem internasional",
  },
  "6,9": {
    number: 10,
    vertical:
      "Buah yang biasanya berwarna kuning atau hijau, memiliki kulit yang bisa dikupas, dan memiliki biji di dalamnya",
  },
  "7,0": {
    number: 11,
    horizontal:
      "Istilah untuk cita-cita atau harapan yang diinginkan seseorang dalam hidupnya",
    vertical: "Agama yang memiliki kitab suci bernama Al-Qur'an",
  },
  "10,0": {
    number: 12,
    horizontal:
      "Istilah pendidikan ilmiah yang mempelajari budaya manusia dan masyarakat",
  },
};
