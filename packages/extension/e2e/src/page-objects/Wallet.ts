import { Page, expect } from "@playwright/test"

import config from "./../config"
import { lang } from "../languages"
import Navigation from "./Navigation"

export default class Wallet extends Navigation {
  constructor(page: Page) {
    super(page)
  }
  get banner() {
    return this.page.locator(`div h1:has-text("${lang.wallet.banner1}")`)
  }
  get description() {
    return this.page.locator(`div p:has-text("${lang.wallet.desc1}")`)
  }
  get createNewWallet() {
    return this.page.locator(`button:has-text("${lang.wallet.createButton}")`)
  }
  get restoreExistingWallet() {
    return this.page.locator(`button:has-text("${lang.wallet.restoreButton}")`)
  }

  //second screen
  get banner2() {
    return this.page.locator(`div h1:has-text("${lang.wallet.banner2}")`)
  }
  get description2() {
    return this.page.locator(`div p:has-text("${lang.wallet.desc2}")`)
  }

  get disclaimerLostOfFunds() {
    return this.page.locator(
      `//input[@name="lossOfFunds"]/following::p[contains(text(),'${lang.wallet.lossOfFunds}')]`,
    )
  }
  get disclaimerAlphaVersion() {
    return this.page.locator(
      `//input[@name="alphaVersion"]/following::p[contains(text(),'${lang.wallet.alphaVersion}')]`,
    )
  }

  //third screen
  get banner3() {
    return this.page.locator(`div h1:has-text("${lang.wallet.banner3}")`)
  }
  get description3() {
    return this.page.locator(`div p:has-text("${lang.wallet.desc3}")`)
  }
  get password() {
    return this.page.locator(
      `input[name="password"][placeholder="${lang.wallet.password}"]`,
    )
  }
  get repeatPassword() {
    return this.page.locator(
      `input[name="repeatPassword"][placeholder="${lang.wallet.repeatPassword}"]`,
    )
  }
  get createWallet() {
    return this.page.locator(`button:text-is("${lang.wallet.createWallet}")`)
  }

  //fourth screen
  get banner4() {
    return this.page.locator(`div h1:has-text("${lang.wallet.banner4}")`)
  }
  get description4() {
    return this.page.locator(`div p:has-text("${lang.wallet.desc4}")`)
  }
  get twitter() {
    return this.page.locator(`a:text-is("${lang.wallet.twitter}")`)
  }
  get discord() {
    return this.page.locator(`a:text-is("${lang.wallet.discord}")`)
  }
  get finish() {
    return this.page.locator(`button:text-is("${lang.wallet.finish}")`)
  }

  async newWalletOnboarding() {
    await Promise.all([
      expect(this.banner).toBeVisible(),
      expect(this.description).toBeVisible(),
      expect(this.restoreExistingWallet).toBeVisible(),
    ])
    await this.createNewWallet.click()

    await Promise.all([
      expect(this.banner2).toBeVisible(),
      expect(this.description2).toBeVisible(),
    ])
    await this.disclaimerLostOfFunds.click()
    await this.disclaimerAlphaVersion.click()
    await this.continue.click()

    await Promise.all([
      expect(this.banner3).toBeVisible(),
      expect(this.description3).toBeVisible(),
    ])
    await this.password.fill(config.password)
    await this.repeatPassword.fill(config.password)
    await this.createWallet.click()

    await Promise.all([
      expect(this.banner4).toBeVisible(),
      expect(this.description4).toBeVisible(),
      expect(this.twitter).toBeVisible(),
      expect(this.discord).toBeVisible(),
      expect(this.finish).toBeEnabled(),
    ])
  }
}
