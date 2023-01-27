import Image from "next/image";
import Link from "next/link";
import { AiFillGoogleCircle } from "react-icons/ai";
import { signIn, useSession } from "next-auth/react";
import AlredyLogin from "../components/alerts/alredy-login";

export default function Login() {
  const { data: session, status } = useSession();
  if (session && status === "authenticated") {
    return <AlredyLogin />;
  }

  if (!session && status === "unauthenticated") {
    return (
      <section
        className={`container-fluid container-login ${
          !session && status === "loading" ? "loading" : "loaded"
        }`}
      >
        <div className="row align-middle">
          <div className="col-12 col-md-6 justify-content-center img-col">
            <div className="image-container">
              <Image
                src={"app-img/instagram-thumb.svg"}
                className="image"
                width="1000"
                priority
                height="1000"
                alt="instagram"
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="login-form bg-white">
              <div className="card-body bg-white">
                <div className="image-wrapper d-flex justify-content-center bg-white">
                  <div className="image-container logo-login bg-white">
                    <Image
                      src={"app-img/text-instagran.svg"}
                      className="image bg-white"
                      align="center"
                      width="1000"
                      height="1000"
                      alt="instagram"
                    />
                  </div>
                </div>
                <div className="input-wrapper bg-white">
                  <input
                    className="mt-4 w-100 input-form"
                    placeholder="Nomor telepon, nama pengguna, atau email"
                    disabled
                  ></input>
                  <input
                    className="mt-2 w-100 input-form"
                    placeholder="Kata Sandi"
                    disabled
                  ></input>
                </div>
                <div className="login-btn d-flex justify-content-center mt-3 bg-white">
                  <Link href={"#maintenance"} className="btn-login bg-danger w-100">
                    Under Maintenance
                  </Link>
                </div>
              </div>
              <div className="spacer d-flex mt-3 bg-white">
                <div className="line-hr left bg-white"></div>
                <div className="or bg-white">
                  <b className="bg-white">ATAU</b>
                </div>
                <div className="line-hr right bg-white"></div>
              </div>
              <Link
                href={"/api/auth/signin"}
                className="google-login text-center mt-3 bg-white d-flex justify-content-center align-middle"
              >
                <AiFillGoogleCircle className="google-logo" />
                <p
                  className="bg-white"
                  onClick={(e) => {
                    e.preventDefault();
                    signIn("google");
                  }}
                >
                  Masuk dengan Google
                </p>
              </Link>
              <div className="forgot-password text-center bg-white">
                <p className="bg-white">Lupa kata sandi?</p>
              </div>
            </div>
            <div className="login-form bg-white mt-2 d-flex justify-content-center">
              <p className="register bg-white mt-3">
                Tidak punya akun?{" "}
                <b className="text-primary bg-white">Buat akun</b>
              </p>
            </div>
            <div className="d-flex justify-content-center">
              <p className="register bg-white mt-2">Dapatkan Aplikasi</p>
            </div>
            <div className="d-flex justify-content-center mt-0">
              <div className="image-container bg-white download-img-1">
                <Image
                  src={"app-img/appStore.svg"}
                  className="image bg-white"
                  align="center"
                  width="1000"
                  height="1000"
                  alt="instagram"
                />
              </div>
              <div className="image-container bg-white download-img-2">
                <Image
                  src={"app-img/gplay.svg"}
                  className="image bg-white"
                  align="center"
                  width="1000"
                  height="1000"
                  alt="instagram"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Login.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
