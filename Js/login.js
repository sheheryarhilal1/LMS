/* =========================================================
   LEARNORA LMS — LOGIN JAVASCRIPT
   Multi-User Student / Teacher / Parent Login
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       ELEMENTS
       ===================================================== */

    const loginForm = document.getElementById("loginForm");

    const username = document.getElementById("username");
    const password = document.getElementById("password");

    const usernameError = document.getElementById("usernameError");
    const passwordError = document.getElementById("passwordError");

    const loginError = document.getElementById("loginError");
    const loginSuccess = document.getElementById("loginSuccess");

    const loginButton = document.getElementById("loginButton");
    const passwordToggle = document.getElementById("passwordToggle");

    const rememberMe = document.getElementById("rememberMe");

    const roleOptions =
        document.querySelectorAll(".role-option");

    const demoToggle =
        document.getElementById("demoToggle");

    const demoContent =
        document.getElementById("demoContent");

    const demoButtons =
        document.querySelectorAll(".use-demo");

    const forgotPassword =
        document.getElementById("forgotPassword");

    const forgotModal =
        document.getElementById("forgotModal");

    const modalClose =
        document.getElementById("modalClose");

    const forgotForm =
        document.getElementById("forgotForm");

    const resetEmail =
        document.getElementById("resetEmail");

    const resetMessage =
        document.getElementById("resetMessage");


    /* =====================================================
       MULTIPLE USERS
       ===================================================== */

    const users = [

        /* =================================================
           STUDENT 1 — SHEHERYAR
           ================================================= */

        {
            id: "STU001",

            email: "student@learnora.com",
            password: "Student@123",

            name: "Sheheryar Ahmed",
            firstName: "Sheheryar",

            role: "student",

            program: "BS Software Engineering",
            semester: "8th Semester",

            avatar: "SA",

            studentId: "LR-STU-001",

            gpa: "3.42",
            attendance: 87,
            overallProgress: 78,

            coursesCount: 5,

            courses: [
                {
                    code: "CS-401",
                    name: "Software Engineering",
                    instructor: "Dr. Ahmed Khan",
                    progress: 82,
                    grade: "A-",
                    credits: 3
                },
                {
                    code: "CS-403",
                    name: "Database Systems",
                    instructor: "Prof. Sarah Malik",
                    progress: 74,
                    grade: "B+",
                    credits: 3
                },
                {
                    code: "DS-301",
                    name: "Data Analytics",
                    instructor: "Dr. Hamza Ali",
                    progress: 68,
                    grade: "B+",
                    credits: 3
                },
                {
                    code: "CS-405",
                    name: "Web Engineering",
                    instructor: "Mr. Bilal Ahmed",
                    progress: 79,
                    grade: "A-",
                    credits: 3
                },
                {
                    code: "SE-410",
                    name: "Software Project Management",
                    instructor: "Dr. Fatima Noor",
                    progress: 72,
                    grade: "B+",
                    credits: 3
                }
            ],

            assignments: [
                {
                    title: "Software Requirements Document",
                    course: "Software Engineering",
                    due: "Sep 30, 2026",
                    status: "pending"
                },
                {
                    title: "Database Normalization",
                    course: "Database Systems",
                    due: "Oct 02, 2026",
                    status: "pending"
                },
                {
                    title: "Data Cleaning Report",
                    course: "Data Analytics",
                    due: "Oct 05, 2026",
                    status: "submitted"
                }
            ]
        },


        /* =================================================
           STUDENT 2 — ALI
           ================================================= */

        {
            id: "STU002",

            email: "ali@learnora.com",
            password: "Ali@123",

            name: "Ali Khan",
            firstName: "Ali",

            role: "student",

            program: "BS Computer Science",
            semester: "7th Semester",

            avatar: "AK",

            studentId: "LR-STU-002",

            gpa: "3.71",
            attendance: 92,
            overallProgress: 84,

            coursesCount: 6,

            courses: [
                {
                    code: "CS-401",
                    name: "Software Engineering",
                    instructor: "Dr. Ahmed Khan",
                    progress: 91,
                    grade: "A",
                    credits: 3
                },
                {
                    code: "CS-403",
                    name: "Database Systems",
                    instructor: "Prof. Sarah Malik",
                    progress: 88,
                    grade: "A-",
                    credits: 3
                },
                {
                    code: "DS-301",
                    name: "Data Analytics",
                    instructor: "Dr. Hamza Ali",
                    progress: 79,
                    grade: "A-",
                    credits: 3
                },
                {
                    code: "CS-405",
                    name: "Web Engineering",
                    instructor: "Mr. Bilal Ahmed",
                    progress: 86,
                    grade: "A",
                    credits: 3
                },
                {
                    code: "AI-310",
                    name: "Artificial Intelligence",
                    instructor: "Dr. Usman Raza",
                    progress: 81,
                    grade: "A-",
                    credits: 3
                },
                {
                    code: "SE-410",
                    name: "Project Management",
                    instructor: "Dr. Fatima Noor",
                    progress: 83,
                    grade: "A",
                    credits: 3
                }
            ],

            assignments: [
                {
                    title: "AI Research Paper",
                    course: "Artificial Intelligence",
                    due: "Sep 29, 2026",
                    status: "pending"
                },
                {
                    title: "Database Project",
                    course: "Database Systems",
                    due: "Oct 01, 2026",
                    status: "submitted"
                },
                {
                    title: "Web Engineering Assignment",
                    course: "Web Engineering",
                    due: "Oct 04, 2026",
                    status: "pending"
                }
            ]
        },


        /* =================================================
           STUDENT 3 — SARA
           ================================================= */

        {
            id: "STU003",

            email: "sara@learnora.com",
            password: "Sara@123",

            name: "Sara Ahmed",
            firstName: "Sara",

            role: "student",

            program: "BS Software Engineering",
            semester: "6th Semester",

            avatar: "SA",

            studentId: "LR-STU-003",

            gpa: "3.58",
            attendance: 89,
            overallProgress: 81,

            coursesCount: 5,

            courses: [
                {
                    code: "SE-301",
                    name: "Software Design",
                    instructor: "Dr. Ahmed Khan",
                    progress: 85,
                    grade: "A-",
                    credits: 3
                },
                {
                    code: "CS-303",
                    name: "Database Systems",
                    instructor: "Prof. Sarah Malik",
                    progress: 78,
                    grade: "B+",
                    credits: 3
                },
                {
                    code: "DS-301",
                    name: "Data Analytics",
                    instructor: "Dr. Hamza Ali",
                    progress: 83,
                    grade: "A-",
                    credits: 3
                },
                {
                    code: "WEB-302",
                    name: "Web Development",
                    instructor: "Mr. Bilal Ahmed",
                    progress: 88,
                    grade: "A",
                    credits: 3
                },
                {
                    code: "SE-305",
                    name: "Software Testing",
                    instructor: "Dr. Fatima Noor",
                    progress: 75,
                    grade: "B+",
                    credits: 3
                }
            ],

            assignments: [
                {
                    title: "Software Testing Report",
                    course: "Software Testing",
                    due: "Sep 30, 2026",
                    status: "pending"
                },
                {
                    title: "Web Development Project",
                    course: "Web Development",
                    due: "Oct 03, 2026",
                    status: "submitted"
                },
                {
                    title: "Analytics Case Study",
                    course: "Data Analytics",
                    due: "Oct 06, 2026",
                    status: "pending"
                }
            ]
        },


        /* =================================================
           STUDENT 4 — HAMZA
           ================================================= */

        {
            id: "STU004",

            email: "hamza@learnora.com",
            password: "Hamza@123",

            name: "Hamza Malik",
            firstName: "Hamza",

            role: "student",

            program: "BS Data Science",
            semester: "5th Semester",

            avatar: "HM",

            studentId: "LR-STU-004",

            gpa: "3.26",
            attendance: 84,
            overallProgress: 71,

            coursesCount: 5,

            courses: [
                {
                    code: "DS-301",
                    name: "Data Analytics",
                    instructor: "Dr. Hamza Ali",
                    progress: 73,
                    grade: "B+",
                    credits: 3
                },
                {
                    code: "DS-303",
                    name: "Machine Learning",
                    instructor: "Dr. Usman Raza",
                    progress: 69,
                    grade: "B",
                    credits: 3
                },
                {
                    code: "CS-303",
                    name: "Database Systems",
                    instructor: "Prof. Sarah Malik",
                    progress: 76,
                    grade: "B+",
                    credits: 3
                },
                {
                    code: "STAT-301",
                    name: "Statistics",
                    instructor: "Dr. Ayesha Noor",
                    progress: 67,
                    grade: "B",
                    credits: 3
                },
                {
                    code: "CS-305",
                    name: "Python Programming",
                    instructor: "Mr. Bilal Ahmed",
                    progress: 70,
                    grade: "B+",
                    credits: 3
                }
            ],

            assignments: [
                {
                    title: "Machine Learning Model",
                    course: "Machine Learning",
                    due: "Oct 01, 2026",
                    status: "pending"
                },
                {
                    title: "Statistics Analysis",
                    course: "Statistics",
                    due: "Oct 04, 2026",
                    status: "pending"
                },
                {
                    title: "Python Data Analysis",
                    course: "Python Programming",
                    due: "Oct 07, 2026",
                    status: "submitted"
                }
            ]
        },


        /* =================================================
           TEACHER
           ================================================= */

        {
            id: "TCH001",

            email: "teacher@learnora.com",
            password: "Teacher@123",

            name: "Dr. Ahmed Khan",
            firstName: "Ahmed",

            role: "teacher",

            program: "Software Engineering Department",
            semester: "",

            avatar: "AK"
        },


        /* =================================================
           PARENT
           ================================================= */

        {
            id: "PAR001",

            email: "parent@learnora.com",
            password: "Parent@123",

            name: "Ahmed's Parent",
            firstName: "Parent",

            role: "parent",

            program: "Parent Portal",
            semester: "",

            avatar: "AP"
        }

    ];


    /* =====================================================
       CURRENT ROLE
       ===================================================== */

    let currentRole = "student";


    /* =====================================================
       HELPER — NORMALIZE ROLE
       ===================================================== */

    function normalizeRole(role) {

        return String(role || "")
            .trim()
            .toLowerCase();

    }


    /* =====================================================
       HELPER — HIDE MESSAGES
       ===================================================== */

    function hideMessages() {

        if (loginError) {
            loginError.classList.remove("show");
        }

        if (loginSuccess) {
            loginSuccess.classList.remove("show");
        }

    }


    /* =====================================================
       HELPER — CLEAR ERRORS
       ===================================================== */

    function clearErrors() {

        if (usernameError) {
            usernameError.textContent = "";
        }

        if (passwordError) {
            passwordError.textContent = "";
        }

        if (username) {
            username.classList.remove("input-error");
        }

        if (password) {
            password.classList.remove("input-error");
        }

    }


    /* =====================================================
       ROLE SELECTOR
       ===================================================== */

    roleOptions.forEach(option => {

        option.addEventListener("click", () => {

            roleOptions.forEach(item => {
                item.classList.remove("active");
            });

            option.classList.add("active");

            currentRole =
                normalizeRole(option.dataset.role);

            hideMessages();
            clearErrors();

            if (username) {

                if (currentRole === "student") {

                    username.placeholder =
                        "Enter your student email or username";

                }

                else if (currentRole === "teacher") {

                    username.placeholder =
                        "Enter your teacher email or username";

                }

                else if (currentRole === "parent") {

                    username.placeholder =
                        "Enter your parent email or username";

                }

            }

        });

    });


    /* =====================================================
       PASSWORD SHOW / HIDE
       ===================================================== */

    if (passwordToggle && password) {

        passwordToggle.addEventListener("click", () => {

            const icon =
                passwordToggle.querySelector("i");

            if (password.type === "password") {

                password.type = "text";

                if (icon) {

                    icon.classList.remove("fa-eye");
                    icon.classList.add("fa-eye-slash");

                }

                passwordToggle.setAttribute(
                    "aria-label",
                    "Hide password"
                );

            }

            else {

                password.type = "password";

                if (icon) {

                    icon.classList.remove("fa-eye-slash");
                    icon.classList.add("fa-eye");

                }

                passwordToggle.setAttribute(
                    "aria-label",
                    "Show password"
                );

            }

        });

    }


    /* =====================================================
       DEMO ACCESS TOGGLE
       ===================================================== */

    if (demoToggle && demoContent) {

        demoToggle.addEventListener("click", () => {

            demoContent.classList.toggle("open");

            const icon =
                demoToggle.querySelector("i");

            if (!icon) {
                return;
            }

            if (demoContent.classList.contains("open")) {

                icon.classList.remove(
                    "fa-chevron-down"
                );

                icon.classList.add(
                    "fa-chevron-up"
                );

            }

            else {

                icon.classList.remove(
                    "fa-chevron-up"
                );

                icon.classList.add(
                    "fa-chevron-down"
                );

            }

        });

    }


    /* =====================================================
       USE DEMO ACCOUNT
       ===================================================== */

    demoButtons.forEach(button => {

        button.addEventListener("click", () => {

            const email =
                button.dataset.email || "";

            const userPassword =
                button.dataset.password || "";

            const role =
                normalizeRole(button.dataset.role);


            if (username) {
                username.value = email;
            }

            if (password) {
                password.value = userPassword;
            }


            roleOptions.forEach(option => {

                option.classList.remove("active");

                if (
                    normalizeRole(option.dataset.role) ===
                    role
                ) {

                    option.classList.add("active");

                }

            });


            currentRole = role;

            clearErrors();
            hideMessages();


            setTimeout(() => {

                if (loginForm) {
                    loginForm.requestSubmit();
                }

            }, 200);

        });

    });


    /* =====================================================
       VALIDATE LOGIN
       ===================================================== */

    function validateLogin() {

        let valid = true;

        clearErrors();

        const emailValue =
            username
                ? username.value.trim()
                : "";

        const passwordValue =
            password
                ? password.value
                : "";


        if (!emailValue) {

            if (usernameError) {

                usernameError.textContent =
                    "Please enter your email or username.";

            }

            if (username) {
                username.classList.add("input-error");
            }

            valid = false;

        }


        if (!passwordValue) {

            if (passwordError) {

                passwordError.textContent =
                    "Please enter your password.";

            }

            if (password) {
                password.classList.add("input-error");
            }

            valid = false;

        }


        return valid;

    }


    /* =====================================================
       LOGIN SUBMIT
       ===================================================== */

    if (loginForm) {

        loginForm.addEventListener("submit", event => {

            event.preventDefault();

            hideMessages();


            if (!validateLogin()) {
                return;
            }


            /* =============================================
               GET INPUT VALUES
               ============================================= */

            const emailValue =
                username.value
                    .trim()
                    .toLowerCase();

            const passwordValue =
                password.value;

            const selectedRole =
                normalizeRole(currentRole);


            /* =============================================
               FIND ACCOUNT
               ============================================= */

            const account = users.find(user => {

                const userEmail =
                    String(user.email)
                        .trim()
                        .toLowerCase();

                const userPassword =
                    String(user.password);

                const userRole =
                    normalizeRole(user.role);


                return (
                    userEmail === emailValue &&
                    userPassword === passwordValue &&
                    userRole === selectedRole
                );

            });


            /* =============================================
               INVALID LOGIN
               ============================================= */

            if (!account) {

                if (loginError) {

                    loginError.classList.add("show");

                    const message =
                        loginError.querySelector("span");

                    if (message) {

                        message.textContent =
                            `Invalid ${selectedRole} credentials. Please check your email and password.`;

                    }

                }

                console.log(
                    "Login failed:",
                    {
                        email: emailValue,
                        role: selectedRole
                    }
                );

                return;

            }


            /* =============================================
               IMPORTANT
               CLEAR OLD USER DATA
               ============================================= */

            localStorage.removeItem(
                "learnora_current_user"
            );

            localStorage.removeItem(
                "learnora_user_id"
            );

            localStorage.removeItem(
                "learnora_student_name"
            );


            /* =============================================
               SAVE LOGIN STATUS
               ============================================= */

            localStorage.setItem(
                "learnora_logged_in",
                "true"
            );


            /* =============================================
               SAVE ROLE
               ============================================= */

            localStorage.setItem(
                "learnora_user_role",
                account.role
            );


            /* =============================================
               SAVE EMAIL
               ============================================= */

            localStorage.setItem(
                "learnora_user_email",
                account.email
            );


            /* =============================================
               SAVE COMPLETE USER
               ============================================= */

            localStorage.setItem(
                "learnora_current_user",
                JSON.stringify(account)
            );


            /* =============================================
               SAVE USER ID
               ============================================= */

            localStorage.setItem(
                "learnora_user_id",
                account.id
            );


            /* =============================================
               BACKWARD COMPATIBILITY
               ============================================= */

            localStorage.setItem(
                "learnora_student_name",
                account.name
            );


            /* =============================================
               REMEMBER ME
               ============================================= */

            if (
                rememberMe &&
                rememberMe.checked
            ) {

                localStorage.setItem(
                    "learnora_remember",
                    "true"
                );

            }

            else {

                localStorage.removeItem(
                    "learnora_remember"
                );

            }


            /* =============================================
               SUCCESS MESSAGE
               ============================================= */

            if (loginSuccess) {

                loginSuccess.classList.add("show");

                const message =
                    loginSuccess.querySelector("span");

                if (message) {

                    message.textContent =
                        `Welcome ${account.firstName}! Login successful. Redirecting...`;

                }

            }


            /* =============================================
               LOADING STATE
               ============================================= */

            if (loginButton) {

                loginButton.classList.add("loading");

                loginButton.disabled = true;

            }


            /* =============================================
               REDIRECT
               ============================================= */

            setTimeout(() => {

                /* =========================================
                   STUDENT
                   ========================================= */

                if (account.role === "student") {

                    window.location.href =
                        "/Html/students/dashboard.html";

                    return;

                }


                /* =========================================
                   TEACHER
                   ========================================= */

                if (account.role === "teacher") {

                    window.location.href =
                        "/Html/teacher/dashboard.html";

                    return;

                }


                /* =========================================
                   PARENT
                   ========================================= */

                if (account.role === "parent") {

                    window.location.href =
                        "/Html/parent/dashboard.html";

                    return;

                }

            }, 800);

        });

    }


    /* =====================================================
       FORGOT PASSWORD
       ===================================================== */

    if (
        forgotPassword &&
        forgotModal
    ) {

        forgotPassword.addEventListener("click", () => {

            forgotModal.classList.add("show");

            setTimeout(() => {

                if (resetEmail) {
                    resetEmail.focus();
                }

            }, 100);

        });

    }


    /* =====================================================
       CLOSE FORGOT MODAL
       ===================================================== */

    function closeForgotModal() {

        if (forgotModal) {

            forgotModal.classList.remove("show");

        }

        if (resetMessage) {

            resetMessage.textContent = "";

            resetMessage.className =
                "reset-message";

        }

    }


    /* =====================================================
       MODAL CLOSE BUTTON
       ===================================================== */

    if (modalClose) {

        modalClose.addEventListener(
            "click",
            closeForgotModal
        );

    }


    /* =====================================================
       CLOSE MODAL ON OVERLAY
       ===================================================== */

    if (forgotModal) {

        forgotModal.addEventListener("click", event => {

            if (event.target === forgotModal) {

                closeForgotModal();

            }

        });

    }


    /* =====================================================
       ESCAPE KEY
       ===================================================== */

    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {

            closeForgotModal();

        }

    });


    /* =====================================================
       FORGOT PASSWORD FORM
       ===================================================== */

    if (forgotForm) {

        forgotForm.addEventListener("submit", event => {

            event.preventDefault();

            const email =
                resetEmail
                    ? resetEmail.value.trim()
                    : "";


            if (!email) {
                return;
            }


            if (resetMessage) {

                resetMessage.textContent =
                    "Password reset instructions have been sent to your email.";

                resetMessage.classList.add("show");

            }


            setTimeout(() => {

                closeForgotModal();

            }, 2500);

        });

    }


    /* =====================================================
       LOAD REMEMBERED USER
       ===================================================== */

    const remembered =
        localStorage.getItem(
            "learnora_remember"
        );


    const savedEmail =
        localStorage.getItem(
            "learnora_user_email"
        );


    const savedRole =
        localStorage.getItem(
            "learnora_user_role"
        );


    if (
        remembered === "true" &&
        savedEmail
    ) {

        if (username) {

            username.value =
                savedEmail;

        }


        if (savedRole) {

            const normalizedSavedRole =
                normalizeRole(savedRole);

            roleOptions.forEach(option => {

                option.classList.remove("active");

                if (
                    normalizeRole(option.dataset.role) ===
                    normalizedSavedRole
                ) {

                    option.classList.add("active");

                }

            });


            currentRole =
                normalizedSavedRole;

        }


        if (rememberMe) {

            rememberMe.checked =
                true;

        }

    }


    /* =====================================================
       REMOVE USERNAME ERROR WHILE TYPING
       ===================================================== */

    if (username) {

        username.addEventListener("input", () => {

            username.classList.remove(
                "input-error"
            );

            if (usernameError) {

                usernameError.textContent = "";

            }

            hideMessages();

        });

    }


    /* =====================================================
       REMOVE PASSWORD ERROR WHILE TYPING
       ===================================================== */

    if (password) {

        password.addEventListener("input", () => {

            password.classList.remove(
                "input-error"
            );

            if (passwordError) {

                passwordError.textContent = "";

            }

            hideMessages();

        });

    }


    /* =====================================================
       INITIAL STUDENT ROLE
       ===================================================== */

    roleOptions.forEach(option => {

        if (
            normalizeRole(option.dataset.role) ===
            "student"
        ) {

            option.classList.add("active");

        }

    });


    /* =====================================================
       DEBUG
       ===================================================== */

    console.log(
        "Learnora Login System Loaded Successfully."
    );

});