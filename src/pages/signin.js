import { login } from "../redux/actions/userActions";
import ButtonAppBar from "../components/appBar";
import { register } from "../redux/actions/userActions";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./sign.css";
import Footer from "../components/footer";
export default function Sign(props) {
  const [userData, setUserData] = useState({});
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };
  console.log(userData.prop);
  const [isValidate, setIsValidate] = useState(false);
  const [isTrue, setIsTrue] = useState(false);
  const change = (e) => {
    e.preventDefault();
    setIsTrue(!isTrue);
  };
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userData.password === userData.confirmPassword) {
      setIsValidate(!isValidate);
      delete userData.confirmPassword;
      dispatch(register(userData, navigate, dispatch));
    } else {
      alert("not rigthpassword");
    }
  };
  const handlelog = (e) => {
    e.preventDefault();
    dispatch(login(userData, navigate));
  };
  return (
    <div>
      <div>
        {isTrue ? (
          <div>
            <div
              style={{
                paddingTop: "50px",
                width: "100%",
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              <a class="fancy" onClick={(e) => change(e)}>
                <span class="top-key"></span>
                <span class="text">log in</span>
                <span class="bottom-key-1"></span>
                <span class="bottom-key-2"></span>
              </a>
            </div>
            <div style={{ paddingLeft: "40%", paddingTop: "75px" }}>
              <form class="form card1" onSubmit={(e) => handleSubmit(e)}>
                <div class="card_header">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      fill="currentColor"
                      d="M4 15h2v5h12V4H6v5H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6zm6-4V8l5 4-5 4v-3H2v-2h8z"
                    ></path>
                  </svg>
                  <h1 class="form_heading">Sign in</h1>
                </div>
                <div class="field">
                  <label for="username">Username</label>
                  <input
                    class="input"
                    name="username"
                    type="text"
                    placeholder="Username"
                    id="username"
                    onChange={handleChange}
                  />
                </div>
                <div class="field">
                  <label for="password">Password</label>
                  <input
                    onChange={handleChange}
                    class="input"
                    name="password"
                    type="password"
                    placeholder="Password"
                    id="password"
                  />
                </div>

                <div class="field">
                  <label for="password">prop</label>
                  <select
                    onChange={handleChange}
                    class="input"
                    name="prop"
                    type="text"
                    placeholder="your prop"
                    id="prop"
                  >
                    <option>admin</option>
                    <option>user</option>
                  </select>
                </div>

                {isValidate == false ? (
                  <div class="field">
                    <label for="password">Confirm-Password</label>
                    <input
                      onChange={handleChange}
                      class="input"
                      name="confirmPassword"
                      type="password"
                      placeholder="not confirmed"
                      id="password"
                    />
                  </div>
                ) : (
                  <div class="field">
                    <label for="password">Confirm-Password</label>
                    <input
                      onChange={handleChange}
                      class="input"
                      name="confirmPassword"
                      type="password"
                      placeholder="Confirm-password"
                      id="password"
                    />
                  </div>
                )}
                <div class="field">
                  <button class="button" type="submit">
                    sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
        ) : (
          <div>
            <div
              style={{
                paddingTop: "50px",
                width: "100%",
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              <a class="fancy" onClick={(e)=>change(e)}>
                <span class="top-key"></span>
                <span class="text">sign in</span>
                <span class="bottom-key-1"></span>
                <span class="bottom-key-2"></span>
              </a>
            </div>
            <div style={{ paddingLeft: "40%", paddingTop: "75px" }}>
              <form class="form card1" onSubmit={(e) => handlelog(e)}>
                <div class="card_header">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      fill="currentColor"
                      d="M4 15h2v5h12V4H6v5H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6zm6-4V8l5 4-5 4v-3H2v-2h8z"
                    ></path>
                  </svg>
                  <h1 class="form_heading">log in</h1>
                </div>
                <div class="field">
                  <label for="username">Username</label>
                  <input
                    class="input"
                    name="username"
                    type="text"
                    placeholder="Username"
                    id="username"
                    onChange={handleChange}
                  />
                </div>
                <div class="field">
                  <label for="password">Password</label>
                  <input
                    onChange={handleChange}
                    class="input"
                    name="password"
                    type="password"
                    placeholder="Password"
                    id="password"
                  />
                </div>

                <div class="field">
                  <button class="button" type="submit">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
      <Footer></Footer>
    </div>
  );
}
