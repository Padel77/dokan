// Removed unused import of React
import { classNames } from "classnames";

export default function card() {
  return (
    <div>
      <div className="ProductCard w-72 h-96 relative">
        <div className="Frame11338 w-72 h-56 px-5 py-3 left-0 top-[40px] absolute bg-white rounded justify-center items-center gap-2.5 inline-flex">
          <img
            className="ImageFrame w-56 h-56 relative rounded"
            src="https://via.placeholder.com/220x220"
          />
        </div>
        <div className="Add w-10 h-10 p-2 left-0 top-[284px] absolute bg-emerald-700 rounded-tl rounded-tr-lg rounded-bl rounded-br-lg justify-center items-center inline-flex">
          <div className="AddLine12 w-6 h-6 relative flex-col justify-start items-start flex" />
        </div>
        <svg
          className="Add w-10 h-10 p-2 left-0 top-[284px] absolute bg-emerald-700 rounded-tl rounded-tr-lg rounded-bl rounded-br-lg justify-center items-center inline-flex"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 4C0 1.79086 1.79086 0 4 0H32C36.4183 0 40 3.58172 40 8V32C40 36.4183 36.4183 40 32 40H4C1.79086 40 0 38.2091 0 36V4Z"
            fill="#007460"
          />
          <g clipPath="url(#clip0_929_815)">
            <path
              d="M19 19V13H21V19H27V21H21V27H19V21H13V19H19Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_929_815">
              <rect
                width="24"
                height="24"
                fill="white"
                transform="translate(8 8)"
              />
            </clipPath>
          </defs>
        </svg>

        <div className="Tag px-2 py-1 left-0 top-[4px] absolute bg-orange-400 rounded-br-md flex-col justify-center items-start gap-2 inline-flex">
          <svg
            width="106"
            height="28"
            viewBox="0 0 106 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0H106V22C106 25.3137 103.314 28 100 28H0V0Z"
              fill="#FF8540"
            />
            <g clipPath="url(#clip0_939_532)">
              <path
                d="M18.0004 23.1667C16.7481 23.1666 15.5246 22.7902 14.4887 22.0864C13.4528 21.3826 12.6522 20.3839 12.1907 19.2196C11.7293 18.0554 11.6282 16.7793 11.9007 15.5569C12.1731 14.3346 12.8065 13.2222 13.7188 12.3642C14.8371 11.3117 17.5838 9.41667 17.1671 5.25C22.1671 8.58333 24.6671 11.9167 19.6671 16.9167C20.5004 16.9167 21.7504 16.9167 23.8338 14.8583C24.0588 15.5025 24.2504 16.195 24.2504 16.9167C24.2504 18.5743 23.592 20.164 22.4199 21.3361C21.2478 22.5082 19.658 23.1667 18.0004 23.1667Z"
                fill="white"
              />
            </g>
            <path
              d="M35.319 20C35.063 20 34.855 19.9253 34.695 19.776C34.5457 19.616 34.471 19.4187 34.471 19.184V9.6H36.183V19.184C36.183 19.4187 36.0977 19.616 35.927 19.776C35.767 19.9253 35.5643 20 35.319 20ZM31.687 10.336C31.463 10.336 31.271 10.2667 31.111 10.128C30.951 9.97867 30.871 9.78667 30.871 9.552C30.871 9.328 30.951 9.14667 31.111 9.008C31.271 8.86933 31.463 8.8 31.687 8.8H38.967C39.191 8.8 39.3777 8.87467 39.527 9.024C39.687 9.16267 39.767 9.344 39.767 9.568C39.767 9.80267 39.687 9.98933 39.527 10.128C39.3777 10.2667 39.191 10.336 38.967 10.336H31.687ZM47.5434 15.792C47.5434 16.6453 47.3567 17.4027 46.9834 18.064C46.61 18.7147 46.1034 19.2267 45.4634 19.6C44.8234 19.9733 44.1034 20.16 43.3034 20.16C42.5034 20.16 41.7834 19.9733 41.1434 19.6C40.5034 19.2267 39.9914 18.7147 39.6074 18.064C39.234 17.4027 39.0474 16.6453 39.0474 15.792C39.0474 14.928 39.234 14.1707 39.6074 13.52C39.9914 12.8587 40.5034 12.3413 41.1434 11.968C41.7834 11.584 42.5034 11.392 43.3034 11.392C44.1034 11.392 44.8234 11.584 45.4634 11.968C46.1034 12.3413 46.61 12.8587 46.9834 13.52C47.3567 14.1707 47.5434 14.928 47.5434 15.792ZM45.9434 15.792C45.9434 15.2053 45.826 14.6987 45.5914 14.272C45.3567 13.8347 45.0367 13.4933 44.6314 13.248C44.2367 12.992 43.794 12.864 43.3034 12.864C42.8127 12.864 42.3647 12.992 41.9594 13.248C41.554 13.4933 41.234 13.8347 40.9994 14.272C40.7647 14.6987 40.6474 15.2053 40.6474 15.792C40.6474 16.3573 40.7647 16.8587 40.9994 17.296C41.234 17.7333 41.554 18.0747 41.9594 18.32C42.3647 18.5653 42.8127 18.688 43.3034 18.688C43.794 18.688 44.2367 18.5653 44.6314 18.32C45.0367 18.0747 45.3567 17.7333 45.5914 17.296C45.826 16.8587 45.9434 16.3573 45.9434 15.792ZM53.5944 11.44C54.341 11.44 55.0024 11.6267 55.5784 12C56.165 12.3733 56.629 12.8853 56.9704 13.536C57.3117 14.176 57.4824 14.9227 57.4824 15.776C57.4824 16.6293 57.3117 17.3867 56.9704 18.048C56.629 18.6987 56.1704 19.2107 55.5944 19.584C55.0184 19.9573 54.3677 20.144 53.6424 20.144C53.237 20.144 52.853 20.08 52.4904 19.952C52.1277 19.824 51.8077 19.6587 51.5304 19.456C51.253 19.2427 51.0237 19.0187 50.8424 18.784C50.6717 18.5493 50.565 18.3307 50.5224 18.128L50.9544 17.92V22.384C50.9544 22.6187 50.8744 22.8107 50.7144 22.96C50.565 23.12 50.3784 23.2 50.1544 23.2C49.9197 23.2 49.7277 23.12 49.5784 22.96C49.429 22.8107 49.3544 22.6187 49.3544 22.384V12.368C49.3544 12.144 49.429 11.952 49.5784 11.792C49.7277 11.632 49.9197 11.552 50.1544 11.552C50.3784 11.552 50.565 11.632 50.7144 11.792C50.8744 11.952 50.9544 12.144 50.9544 12.368V13.472L50.6984 13.328C50.7304 13.1253 50.8317 12.9173 51.0024 12.704C51.173 12.48 51.3864 12.272 51.6424 12.08C51.909 11.888 52.2077 11.7333 52.5384 11.616C52.8797 11.4987 53.2317 11.44 53.5944 11.44ZM53.4184 12.912C52.9064 12.912 52.4584 13.04 52.0744 13.296C51.701 13.5413 51.4077 13.8773 51.1944 14.304C50.981 14.7307 50.8744 15.2213 50.8744 15.776C50.8744 16.32 50.981 16.816 51.1944 17.264C51.4077 17.7013 51.701 18.048 52.0744 18.304C52.4584 18.5493 52.9064 18.672 53.4184 18.672C53.9197 18.672 54.357 18.5493 54.7304 18.304C55.1037 18.048 55.397 17.7013 55.6104 17.264C55.8344 16.816 55.9464 16.32 55.9464 15.776C55.9464 15.232 55.8344 14.7467 55.6104 14.32C55.397 13.8827 55.1037 13.5413 54.7304 13.296C54.357 13.04 53.9197 12.912 53.4184 12.912ZM68.641 8.8C69.4197 8.8 70.1077 8.94933 70.705 9.248C71.3023 9.536 71.7983 9.94133 72.193 10.464C72.5983 10.976 72.9023 11.5733 73.105 12.256C73.3077 12.928 73.409 13.6427 73.409 14.4C73.409 15.4347 73.2277 16.3787 72.865 17.232C72.5023 18.0747 71.969 18.7467 71.265 19.248C70.561 19.7493 69.6863 20 68.641 20H64.737C64.513 20 64.321 19.9253 64.161 19.776C64.001 19.616 63.921 19.4187 63.921 19.184V9.616C63.921 9.38133 64.001 9.18933 64.161 9.04C64.321 8.88 64.513 8.8 64.737 8.8H68.641ZM68.481 18.464C69.2383 18.464 69.8517 18.2773 70.321 17.904C70.7903 17.5307 71.1317 17.04 71.345 16.432C71.569 15.8133 71.681 15.136 71.681 14.4C71.681 13.856 71.617 13.344 71.489 12.864C71.3717 12.3733 71.1797 11.9413 70.913 11.568C70.657 11.184 70.3263 10.8853 69.921 10.672C69.5263 10.448 69.0463 10.336 68.481 10.336H65.457L65.601 10.192V18.624L65.505 18.464H68.481ZM79.2431 20.16C78.3578 20.16 77.5898 19.9787 76.9391 19.616C76.2885 19.2427 75.7818 18.736 75.4191 18.096C75.0671 17.4453 74.8911 16.704 74.8911 15.872C74.8911 14.9333 75.0778 14.1333 75.4511 13.472C75.8351 12.8 76.3311 12.288 76.9391 11.936C77.5471 11.5733 78.1925 11.392 78.8751 11.392C79.3978 11.392 79.8938 11.4987 80.3631 11.712C80.8325 11.9147 81.2485 12.2027 81.6111 12.576C81.9845 12.9387 82.2778 13.3707 82.4911 13.872C82.7045 14.3627 82.8165 14.9013 82.8271 15.488C82.8165 15.7013 82.7311 15.8773 82.5711 16.016C82.4111 16.1547 82.2245 16.224 82.0111 16.224H75.7871L75.4031 14.864H81.4191L81.1151 15.152V14.752C81.0938 14.3787 80.9711 14.0533 80.7471 13.776C80.5231 13.488 80.2458 13.2693 79.9151 13.12C79.5845 12.96 79.2378 12.88 78.8751 12.88C78.5551 12.88 78.2458 12.9333 77.9471 13.04C77.6591 13.136 77.3978 13.296 77.1631 13.52C76.9391 13.744 76.7578 14.0427 76.6191 14.416C76.4911 14.7787 76.4271 15.232 76.4271 15.776C76.4271 16.3627 76.5498 16.8747 76.7951 17.312C77.0405 17.7493 77.3711 18.0907 77.7871 18.336C78.2031 18.5707 78.6618 18.688 79.1631 18.688C79.5578 18.688 79.8831 18.6507 80.1391 18.576C80.3951 18.4907 80.6085 18.3893 80.7791 18.272C80.9498 18.1547 81.0991 18.0427 81.2271 17.936C81.3871 17.84 81.5471 17.792 81.7071 17.792C81.8991 17.792 82.0591 17.8613 82.1871 18C82.3151 18.128 82.3791 18.2827 82.3791 18.464C82.3791 18.6987 82.2618 18.912 82.0271 19.104C81.7391 19.3813 81.3391 19.6267 80.8271 19.84C80.3258 20.0533 79.7978 20.16 79.2431 20.16ZM91.5941 11.456C91.8288 11.456 92.0208 11.536 92.1701 11.696C92.3195 11.8453 92.3941 12.0373 92.3941 12.272V19.184C92.3941 19.4187 92.3195 19.616 92.1701 19.776C92.0208 19.9253 91.8288 20 91.5941 20C91.3701 20 91.1781 19.9253 91.0181 19.776C90.8688 19.616 90.7941 19.4187 90.7941 19.184V18.032L91.1301 18.08C91.1301 18.272 91.0501 18.4853 90.8901 18.72C90.7408 18.9547 90.5328 19.184 90.2661 19.408C89.9995 19.6213 89.6848 19.8027 89.3221 19.952C88.9595 20.0907 88.5701 20.16 88.1541 20.16C87.4181 20.16 86.7568 19.9733 86.1701 19.6C85.5835 19.216 85.1195 18.6933 84.7781 18.032C84.4368 17.3707 84.2661 16.6187 84.2661 15.776C84.2661 14.912 84.4368 14.1547 84.7781 13.504C85.1195 12.8427 85.5781 12.3253 86.1541 11.952C86.7408 11.5787 87.3915 11.392 88.1061 11.392C88.5648 11.392 88.9861 11.4667 89.3701 11.616C89.7648 11.7653 90.1061 11.9573 90.3941 12.192C90.6821 12.4267 90.9008 12.6773 91.0501 12.944C91.2101 13.2 91.2901 13.4453 91.2901 13.68L90.7941 13.728V12.272C90.7941 12.048 90.8688 11.856 91.0181 11.696C91.1781 11.536 91.3701 11.456 91.5941 11.456ZM88.3301 18.688C88.8315 18.688 89.2741 18.56 89.6581 18.304C90.0421 18.048 90.3408 17.7013 90.5541 17.264C90.7675 16.816 90.8741 16.32 90.8741 15.776C90.8741 15.2213 90.7675 14.7253 90.5541 14.288C90.3408 13.8507 90.0421 13.504 89.6581 13.248C89.2741 12.992 88.8315 12.864 88.3301 12.864C87.8395 12.864 87.4021 12.992 87.0181 13.248C86.6448 13.504 86.3461 13.8507 86.1221 14.288C85.9088 14.7253 85.8021 15.2213 85.8021 15.776C85.8021 16.32 85.9088 16.816 86.1221 17.264C86.3461 17.7013 86.6448 18.048 87.0181 18.304C87.4021 18.56 87.8395 18.688 88.3301 18.688ZM96.3636 19.184C96.3636 19.4187 96.2836 19.616 96.1236 19.776C95.9743 19.9253 95.7876 20 95.5636 20C95.3396 20 95.1476 19.9253 94.9876 19.776C94.8383 19.616 94.7636 19.4187 94.7636 19.184V8.976C94.7636 8.74133 94.8436 8.54933 95.0036 8.4C95.1636 8.24 95.3556 8.16 95.5796 8.16C95.8143 8.16 96.001 8.24 96.1396 8.4C96.289 8.54933 96.3636 8.74133 96.3636 8.976V19.184Z"
              fill="white"
            />
            <defs>
              <clipPath id="clip0_939_532">
                <rect
                  width="20"
                  height="20"
                  fill="white"
                  transform="translate(8 4)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="Frame23 left-0 top-[370px] absolute flex-col justify-start items-start gap-1 inline-flex">
          <div className="Frame22 w-32 justify-start items-center gap-2 inline-flex">
            <div className="00Sar w-20">
              <span className="text-zinc-950 text-xl font-bold font-['Quicksand'] leading-relaxed">
                25,
              </span>
              <span className="text-zinc-950 text-sm font-bold font-['Quicksand'] leading-tight">
                00 SAR
              </span>
            </div>
          </div>
          <div className="PastaReggiaPenneZiti500gMoreInformation w-72 text-black text-base font-normal font-['Quicksand'] leading-tight">
            Pasta Reggia — Penne ziti, 500g
            <br />
            More information
          </div>
        </div>
        <svg
          className="absolute top-0 right-0"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25.9504 5.32554C22.3749 3.1323 19.2542 4.01615 17.3795 5.42402L17.3795 5.42403C16.6108 6.00128 16.2265 6.28991 16.0003 6.28991C15.7742 6.28991 15.3899 6.00128 14.6212 5.42402C12.7465 4.01615 9.62577 3.1323 6.05024 5.32554C1.35775 8.20391 0.295953 17.6998 11.1197 25.7111C13.1813 27.237 14.2121 28 16.0003 28C17.7886 28 18.8194 27.237 20.881 25.7111C31.7047 17.6998 30.6429 8.20391 25.9504 5.32554Z"
            stroke="#007460"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
        <div className="Group11579 w-72 left-0 top-[330px] absolute flex justify-between">
          <div className="flex items-center">
            <svg
              className="w-4 h-4 text-yellow-300 ms-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-yellow-300 ms-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-yellow-300 ms-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-yellow-300 ms-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M4.33366 7.33333C3.86699 7.33333 3.47255 7.17222 3.15033 6.85C2.8281 6.52778 2.66699 6.13333 2.66699 5.66667C2.66699 5.2 2.8281 4.80556 3.15033 4.48333C3.47255 4.16111 3.86699 4 4.33366 4C4.80033 4 5.19477 4.16111 5.51699 4.48333C5.83921 4.80556 6.00033 5.2 6.00033 5.66667C6.00033 6.13333 5.83921 6.52778 5.51699 6.85C5.19477 7.17222 4.80033 7.33333 4.33366 7.33333ZM4.36699 15.6667C3.90033 15.6667 3.50033 15.5056 3.16699 15.1833C2.83366 14.8611 2.66699 14.4667 2.66699 14C2.66699 13.5333 2.83366 13.1389 3.16699 12.8167C3.50033 12.4944 3.90033 12.3333 4.36699 12.3333C4.81144 12.3333 5.19477 12.5 5.51699 12.8333C5.83921 13.1667 6.00033 13.5556 6.00033 14C6.00033 14.4444 5.83921 14.8333 5.51699 15.1667C5.19477 15.5 4.81144 15.6667 4.36699 15.6667ZM4.36699 24C3.90033 24 3.50033 23.8389 3.16699 23.5167C2.83366 23.1944 2.66699 22.8111 2.66699 22.3667C2.66699 21.9 2.83366 21.5 3.16699 21.1667C3.50033 20.8333 3.90033 20.6667 4.36699 20.6667C4.81144 20.6667 5.19477 20.8333 5.51699 21.1667C5.83921 21.5 6.00033 21.9 6.00033 22.3667C6.00033 22.8111 5.83921 23.1944 5.51699 23.5167C5.19477 23.8389 4.81144 24 4.36699 24ZM9.33366 6.66667V4.66667H26.667V6.66667H9.33366ZM9.33366 15V13H24.4337C23.4114 13 22.4448 13.1778 21.5337 13.5333C20.6225 13.8889 19.8114 14.3778 19.1003 15H9.33366ZM9.33366 23.3333V21.3333H16.167C16.167 21.6889 16.1892 22.0333 16.2337 22.3667C16.2781 22.7 16.3448 23.0222 16.4337 23.3333H9.33366ZM24.4337 27.5333C22.7003 27.5333 21.2225 26.9167 20.0003 25.6833C18.7781 24.45 18.167 22.9889 18.167 21.3C18.167 19.5667 18.7781 18.0833 20.0003 16.85C21.2225 15.6167 22.7003 15 24.4337 15C26.1448 15 27.617 15.6167 28.8503 16.85C30.0837 18.0833 30.7003 19.5667 30.7003 21.3C30.7003 22.9889 30.0837 24.45 28.8503 25.6833C27.617 26.9167 26.1448 27.5333 24.4337 27.5333ZM23.9337 25.5333H25.0337V21.8667H28.7003V20.7667H25.0337V17.1H23.9337V20.7667H20.267V21.8667H23.9337V25.5333Z"
              fill="#555555"
            />
          </svg>
          <div className="Tag w-24 h-7 px-2 py-1 left-[144px] top-[2px] absolute bg-amber-200 rounded-br-md justify-between items-center gap-1 inline-flex">
            <div className="AccountBalanceWalletFill0Wght400Grad0Opsz482 w-4 h-4 relative" />
            <div className="Title text-center flex justify-between items-center gap-1">
              <span className="text-zinc-950 text-base font-semibold font-['Quicksand'] leading-tight">
                +5.99{" "}
              </span>
              <span className="text-zinc-950 text-xs font-semibold font-['Quicksand'] leading-none">
                SAR
              </span>
              <span className="text-zinc-950 text-base font-semibold font-['Quicksand'] leading-tight">
                {" "}
              </span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M4.33366 7.33333C3.86699 7.33333 3.47255 7.17222 3.15033 6.85C2.8281 6.52778 2.66699 6.13333 2.66699 5.66667C2.66699 5.2 2.8281 4.80556 3.15033 4.48333C3.47255 4.16111 3.86699 4 4.33366 4C4.80033 4 5.19477 4.16111 5.51699 4.48333C5.83921 4.80556 6.00033 5.2 6.00033 5.66667C6.00033 6.13333 5.83921 6.52778 5.51699 6.85C5.19477 7.17222 4.80033 7.33333 4.33366 7.33333ZM4.36699 15.6667C3.90033 15.6667 3.50033 15.5056 3.16699 15.1833C2.83366 14.8611 2.66699 14.4667 2.66699 14C2.66699 13.5333 2.83366 13.1389 3.16699 12.8167C3.50033 12.4944 3.90033 12.3333 4.36699 12.3333C4.81144 12.3333 5.19477 12.5 5.51699 12.8333C5.83921 13.1667 6.00033 13.5556 6.00033 14C6.00033 14.4444 5.83921 14.8333 5.51699 15.1667C5.19477 15.5 4.81144 15.6667 4.36699 15.6667ZM4.36699 24C3.90033 24 3.50033 23.8389 3.16699 23.5167C2.83366 23.1944 2.66699 22.8111 2.66699 22.3667C2.66699 21.9 2.83366 21.5 3.16699 21.1667C3.50033 20.8333 3.90033 20.6667 4.36699 20.6667C4.81144 20.6667 5.19477 20.8333 5.51699 21.1667C5.83921 21.5 6.00033 21.9 6.00033 22.3667C6.00033 22.8111 5.83921 23.1944 5.51699 23.5167C5.19477 23.8389 4.81144 24 4.36699 24ZM9.33366 6.66667V4.66667H26.667V6.66667H9.33366ZM9.33366 15V13H24.4337C23.4114 13 22.4448 13.1778 21.5337 13.5333C20.6225 13.8889 19.8114 14.3778 19.1003 15H9.33366ZM9.33366 23.3333V21.3333H16.167C16.167 21.6889 16.1892 22.0333 16.2337 22.3667C16.2781 22.7 16.3448 23.0222 16.4337 23.3333H9.33366ZM24.4337 27.5333C22.7003 27.5333 21.2225 26.9167 20.0003 25.6833C18.7781 24.45 18.167 22.9889 18.167 21.3C18.167 19.5667 18.7781 18.0833 20.0003 16.85C21.2225 15.6167 22.7003 15 24.4337 15C26.1448 15 27.617 15.6167 28.8503 16.85C30.0837 18.0833 30.7003 19.5667 30.7003 21.3C30.7003 22.9889 30.0837 24.45 28.8503 25.6833C27.617 26.9167 26.1448 27.5333 24.4337 27.5333ZM23.9337 25.5333H25.0337V21.8667H28.7003V20.7667H25.0337V17.1H23.9337V20.7667H20.267V21.8667H23.9337V25.5333Z"
                fill="#555555"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
