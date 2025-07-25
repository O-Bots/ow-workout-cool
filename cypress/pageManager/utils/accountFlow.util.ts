import { BottomNavigation } from "../navigation/bottomNavigation.util";
import { HeaderNavigation } from "../navigation/header.util";
import { ProfilePage } from "../pages/profilePage.util";

const randomNumber = Math.floor(Math.random() * 2)

export class AccountFlow {
    private bottomNavigation = new BottomNavigation();
    private headerNavigation = new HeaderNavigation();
    private profilePage = new ProfilePage();

    login() {
        if (randomNumber === 0) {
            this.bottomNavigation.profile();
            this.profilePage.login();
        }
        if (randomNumber === 1)
            this.headerNavigation.profileDropdown("login")
    }
    createNewAccount() {
        if (randomNumber === 0) {
            cy.get('[data-testid="bottom-nav-profile"]').click()
            this.profilePage.createNewAccount();
        } else if (randomNumber === 1){
            cy.get('[data-testid="header-nav-profile"]').click()
            this.headerNavigation.profileDropdown("register")
        }
    }
}