import { type Tags } from "../types/productTag";

export type Product = {
  productName: string;
  price: number;
  tags: Tags[];
  photoURL: string;
};

export const products: Product[] = [
  {
    productName: "Smartwatch Pro",
    price: 199.99,
    tags: ["Electronics", "Accessories"],
    photoURL:
      "https://imgs.search.brave.com/qGo9Hy5HBg_kw1M01Q1vRXlS4SkkMjtkbqaoNBsY1eg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE2/MzcxNjAxNTE2NjMt/YTQxMDMxNWU0ZTc1/P2ZtPWpwZyZxPTYw/Jnc9MzAwMCZpeGxp/Yj1yYi00LjEuMCZp/eGlkPU0zd3hNakEz/ZkRCOE1IeHpaV0Z5/WTJoOE1URjhmSE50/WVhKMEpUSXdkMkYw/WTJoOFpXNThNSHg4/TUh4OGZEQT0",
  },
  {
    productName: "Yoga Mat Deluxe",
    price: 39.99,
    tags: ["Sports", "Home"],
    photoURL:
      "https://imgs.search.brave.com/QgFiq1oy7ezW2fwqjywAGoe9dRunQNT3FJGG5oGLGb8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dGhld2lyZWN1dHRl/ci5jb20vd3AtY29u/dGVudC9tZWRpYS8y/MDI0LzA3L3lvZ2Et/bWF0LTIwNDhweC0x/NjQ1LmpwZz9hdXRv/PXdlYnAmcXVhbGl0/eT03NSZ3aWR0aD0x/MDI0",
  },
  {
    productName: "Cotton T-Shirt",
    price: 24.99,
    tags: ["Clothing"],
    photoURL:
      "https://imgs.search.brave.com/0fOSSX-o6cPCW-DTI_XBmymHWcO59qV5mJHpwBDmWe0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyNC8w/NC8yOS8wNC8yMS90/c2hpcnQtODcyNjcx/Nl82NDAuanBn",
  },
  {
    productName: "Wireless Headphones",
    price: 89.99,
    tags: ["Electronics"],
    photoURL:
      "https://imgs.search.brave.com/aNEJ8PAFSA3p1CuR_666vcpJEa-PyQNvzNDXdzL1Y7Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by93aXJlbGVzcy1o/ZWFkcGhvbmVzLXdo/aXRlLWJhY2tncm91/bmRfOTY4ODk4LTM2/Ni5qcGc_c2VtdD1h/aXNfaW5jb21pbmcm/dz03NDAmcT04MA",
  },
  {
    productName: "Wooden Bookshelf",
    price: 149.99,
    tags: ["Home", "Books"],
    photoURL:
      "https://imgs.search.brave.com/__9lmNL_h2ShP-70yl9xYXmi1nq51DnzGrWU0Lu0YdU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2ltcGxpLWhvbWUu/Y29tL2Nkbi9zaG9w/L2ZpbGVzL0N1YmVf/Qm9va2Nhc2VzLmpw/Zz92PTE3NTMzNjY5/NDQmd2lkdGg9MTUw/MA",
  },
  {
    productName: "Luxury Lipstick",
    price: 29.99,
    tags: ["Beauty"],
    photoURL:
      "https://imgs.search.brave.com/1-Dd2-wINV4jJ9qSG7E0uFBg2_8Fs5GGklnIruCYjCc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvMjUx/Nzg4MS9wZXhlbHMt/cGhvdG8tMjUxNzg4/MS5qcGVnP2F1dG89/Y29tcHJlc3MmY3M9/dGlueXNyZ2ImZHBy/PTEmdz01MDA",
  },
  {
    productName: "Children's Puzzle Set",
    price: 19.99,
    tags: ["Toys"],
    photoURL:
      "https://imgs.search.brave.com/8PF_OVXp83A-kwW07zlC5P6y5QP59L_nnMLx1SEhrpk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/ODFuVnpITDN1WUwu/anBn",
  },
  {
    productName: "Leather Wallet",
    price: 49.99,
    tags: ["Accessories"],
    photoURL:
      "https://imgs.search.brave.com/3wvwWyJ4EPzQk7sdg2nrIfKPPcIMUOfKITYLx8svu9w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTEz/NTI3NjIwNS9waG90/by9ibGFjay1sZWF0/aGVyLXdhbGxldC1v/bi1hLXdvb2Rlbi10/YWJsZS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9QklmbzNZ/MTZKRjZ5T29ld2dZ/YVhpLXBhY19HNm80/MzZwQjM2VmVvVDIw/RT0",
  },
  {
    productName: "Running Shoes",
    price: 89.99,
    tags: ["Clothing", "Sports"],
    photoURL:
      "https://imgs.search.brave.com/BWLmt5hIuX5KQzlCLnbspbFvadGZn__J2NBkLFWqExg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dGhld2lyZWN1dHRl/ci5jb20vd3AtY29u/dGVudC9tZWRpYS8y/MDIxLzEwL3J1bm5p/bmctc2hvZXMtMjA0/OHB4LTMxMTAuanBn/P2F1dG89d2VicCZx/dWFsaXR5PTc1Jndp/ZHRoPTEwMjQ",
  },
  {
    productName: "Hardcover Journal",
    price: 14.99,
    tags: ["Books", "Accessories"],
    photoURL:
      "https://imgs.search.brave.com/7r5ggGffPBWY31f_wRChgCxo5DgA_RPjxaVpCek3mQM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Z2FsbGVyeWxlYXRo/ZXIuY29tL21lZGlh/L3d5c2l3eWcvZmVh/dHVyZXMvaGFyY292/ZXItZGVzay1qb3Vy/bmFsLWZlYXR1cmUu/anBn",
  },
];
