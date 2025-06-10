import React from "react";
import "../styles/SignupPage.css";

export function SignupPage() {
  return (
    <div className="signup-container">
      <div className="promotional-panel">
        <div className="lock-icon-wrapper">
          <div
            dangerouslySetInnerHTML={{
              __html:
                '<svg id="7:7" layer-name="Frame" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="lock-icon" style="width: 48px; height: 48px"> <path d="M24 30V34M12 42H36C37.0609 42 38.0783 41.5786 38.8284 40.8284C39.5786 40.0783 40 39.0609 40 38V26C40 24.9391 39.5786 23.9217 38.8284 23.1716C38.0783 22.4214 37.0609 22 36 22H12C10.9391 22 9.92172 22.4214 9.17157 23.1716C8.42143 23.9217 8 24.9391 8 26V38C8 39.0609 8.42143 40.0783 9.17157 40.8284C9.92172 41.5786 10.9391 42 12 42ZM32 22V14C32 11.8783 31.1571 9.84344 29.6569 8.34315C28.1566 6.84285 26.1217 6 24 6C21.8783 6 19.8434 6.84285 18.3431 8.34315C16.8429 9.84344 16 11.8783 16 14V22H32Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </svg>',
            }}
          />
        </div>
        <div className="promotional-title">Join Our Community</div>
        <div className="promotional-description">
          Create your account and unlock access to exclusive features,
          personalized content, and a world of possibilities.
        </div>
        <div className="feature-list">
          <div className="feature-item">
            <div className="feature-dot" />
            <span className="feature-text">Secure</span>
          </div>
          <div className="feature-item">
            <div className="feature-dot" />
            <span className="feature-text">Fast</span>
          </div>
          <div className="feature-item">
            <div className="feature-dot" />
            <span className="feature-text">Reliable</span>
          </div>
        </div>
      </div>
      <div className="form-panel">
        <div className="form-container">
          <div className="form-header">
            <div className="form-title">Create Account</div>
            <div className="form-subtitle">
              Sign up to get started with your free account
            </div>
          </div>
          <div className="form-content">
            <div className="name-fields">
              <div className="input-group">
                <label className="input-label">First Name</label>
                <input type="text" defaultValue="John" className="form-input" />
              </div>
              <div className="input-group">
                <label className="input-label">Last Name</label>
                <input type="text" defaultValue="Doe" className="form-input" />
              </div>
            </div>
            <div className="input-group">
              <label className="input-label">Email Address</label>
              <input
                type="email"
                defaultValue="john@example.com"
                className="form-input"
              />
            </div>
            <div className="input-group">
              <label className="input-label">Password</label>
              <div className="password-input-wrapper">
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="form-input password-input"
                />
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      '<svg id="7:27" layer-name="Frame" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="eye-icon" style="position: absolute; right: 16px; top: 50%; transform: translateY(-50%); width: 20px; height: 20px; cursor: pointer"> <path d="M12.5 10C12.5 10.663 12.2366 11.2989 11.7678 11.7678C11.2989 12.2366 10.663 12.5 10 12.5C9.33696 12.5 8.70107 12.2366 8.23223 11.7678C7.76339 11.2989 7.5 10.663 7.5 10C7.5 9.33696 7.76339 8.70107 8.23223 8.23223C8.70107 7.76339 9.33696 7.5 10 7.5C10.663 7.5 11.2989 7.76339 11.7678 8.23223C12.2366 8.70107 12.5 9.33696 12.5 10Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M2.04834 9.99999C3.11001 6.61916 6.26917 4.16666 10 4.16666C13.7317 4.16666 16.89 6.61916 17.9517 9.99999C16.89 13.3808 13.7317 15.8333 10 15.8333C6.26917 15.8333 3.11001 13.3808 2.04834 9.99999Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </svg>',
                  }}
                />
              </div>
            </div>
            <div className="input-group">
              <label className="input-label">Confirm Password</label>
              <div className="password-input-wrapper">
                <input
                  type="password"
                  placeholder="Confirm your password"
                  className="form-input password-input"
                />
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      '<svg id="7:32" layer-name="Frame" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="eye-icon" style="position: absolute; right: 16px; top: 50%; transform: translateY(-50%); width: 20px; height: 20px; cursor: pointer"> <path d="M12.5 10C12.5 10.663 12.2366 11.2989 11.7678 11.7678C11.2989 12.2366 10.663 12.5 10 12.5C9.33696 12.5 8.70107 12.2366 8.23223 11.7678C7.76339 11.2989 7.5 10.663 7.5 10C7.5 9.33696 7.76339 8.70107 8.23223 8.23223C8.70107 7.76339 9.33696 7.5 10 7.5C10.663 7.5 11.2989 7.76339 11.7678 8.23223C12.2366 8.70107 12.5 9.33696 12.5 10Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M2.04834 9.99999C3.11001 6.61916 6.26917 4.16666 10 4.16666C13.7317 4.16666 16.89 6.61916 17.9517 9.99999C16.89 13.3808 13.7317 15.8333 10 15.8333C6.26917 15.8333 3.11001 13.3808 2.04834 9.99999Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </svg>',
                  }}
                />
              </div>
            </div>
            <div className="terms-checkbox">
              <input type="checkbox" className="checkbox-input" />
              <span className="terms-text">
                <span>I agree to the </span>
                <span className="terms-link">Terms of Service</span>
                <span> and </span>
                <span className="terms-link">Privacy Policy</span>
              </span>
            </div>
            <button className="create-account-btn">Create Account</button>
            <div className="signin-link">
              <span className="signin-text">Already have an account?</span>
              <span className="signin-link-text">Sign in here</span>
            </div>
            <div className="divider">
              <div className="divider-line" />
              <span className="divider-text">Or continue with</span>
              <div className="divider-line" />
            </div>
            <div className="social-buttons">
              <button className="social-btn">
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      '<svg id="7:47" layer-name="Frame" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="google-icon" style="width: 20px; height: 20px"> <path d="M18.8 10.2083C18.8 9.55831 18.7417 8.93331 18.6333 8.33331H10V11.8833H14.9333C14.7167 13.025 14.0667 13.9916 13.0917 14.6416V16.95H16.0667C17.8 15.35 18.8 13 18.8 10.2083Z" fill="#4285F4"></path> <path d="M9.99998 19.1667C12.475 19.1667 14.55 18.35 16.0667 16.95L13.0917 14.6417C12.275 15.1917 11.2333 15.525 9.99998 15.525C7.61665 15.525 5.59165 13.9167 4.86665 11.75H1.81665V14.1167C3.32498 17.1083 6.41665 19.1667 9.99998 19.1667Z" fill="#34A853"></path> <path d="M4.86659 11.7417C4.68325 11.1917 4.57492 10.6083 4.57492 10C4.57492 9.39166 4.68325 8.80833 4.86659 8.25833V5.89166H1.81659C1.19159 7.125 0.833252 8.51666 0.833252 10C0.833252 11.4833 1.19159 12.875 1.81659 14.1083L4.19159 12.2583L4.86659 11.7417Z" fill="#FBBC05"></path> <path d="M9.99998 4.48331C11.35 4.48331 12.55 4.94998 13.5083 5.84998L16.1333 3.22498C14.5417 1.74165 12.475 0.833313 9.99998 0.833313C6.41665 0.833313 3.32498 2.89165 1.81665 5.89165L4.86665 8.25831C5.59165 6.09165 7.61665 4.48331 9.99998 4.48331Z" fill="#EA4335"></path> </svg>',
                  }}
                />
                <span>Google</span>
              </button>
              <button className="social-btn">
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      '<svg id="7:54" layer-name="Frame" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="facebook-icon" style="width: 20px; height: 20px"> <g clip-path="url(#clip0_7_54)"> <path d="M20 10.0609C20 4.53835 15.5225 0.0608521 10 0.0608521C4.4775 0.0608521 0 4.53835 0 10.0609C0 15.0525 3.65667 19.1892 8.4375 19.9392V12.9517H5.89833V10.06H8.4375V7.85835C8.4375 5.35252 9.93083 3.96752 12.215 3.96752C13.3083 3.96752 14.4533 4.16335 14.4533 4.16335V6.62419H13.1917C11.9492 6.62419 11.5617 7.39502 11.5617 8.18585V10.0609H14.335L13.8917 12.9525H11.5617V19.94C16.3433 19.1892 20 15.0517 20 10.0609Z" fill="black"></path> </g> <defs> <clipPath id="clip0_7_54"> <rect width="20" height="20" fill="white"></rect> </clipPath> </defs> </svg>',
                  }}
                />
                <span>Facebook</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
