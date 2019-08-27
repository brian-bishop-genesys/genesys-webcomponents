import { newE2EPage } from '@stencil/core/testing';

describe('gux-advanced-dropdown', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<gux-advanced-dropdown></gux-advanced-dropdown>');
    const element = await page.find('gux-advanced-dropdown');
    expect(element).toHaveClass('hydrated');
  });

  it('opens drop down on click', async () => {
    const page = await newE2EPage();
    const enOption = `<gux-dropdown-option value="en" text="English"></gux-dropdown-option>`;
    const nlOption = `<gux-dropdown-option value="nl" text="Dutch"></gux-dropdown-option>`;
    await page.setContent(
      `<gux-advanced-dropdown>${enOption}${nlOption}</gux-advanced-dropdown>`
    );
    await page.waitForChanges();

    const element = await page.find('gux-advanced-dropdown');
    const inputElm = await element.find('.gux-select-input');
    inputElm.click();
    await page.waitForChanges();

    const dropMenuElm = await element.find('.gux-advanced-dropdown-menu');
    expect(dropMenuElm.className.split(' ')).toContain('opened');
  });

  it('selects an item when an option is clicked', async () => {
    const page = await newE2EPage();
    const enOption = `<gux-dropdown-option value="en" text="English"></gux-dropdown-option>`;
    const nlOption = `<gux-dropdown-option value="nl" text="Dutch"></gux-dropdown-option>`;
    await page.setContent(
      `<gux-advanced-dropdown>${enOption}${nlOption}</gux-advanced-dropdown>`
    );
    await page.waitForChanges();

    const element = await page.find('gux-advanced-dropdown');
    const inputSpy = await element.spyOnEvent('input');

    const inputElm = await element.find('.gux-select-input');
    inputElm.click();
    await page.waitForChanges();

    let dropMenuElm = await element.find('.gux-advanced-dropdown-menu');
    const enElm = await dropMenuElm.find('gux-dropdown-option');
    enElm.click();
    await page.waitForChanges();
    dropMenuElm = await element.find('.gux-advanced-dropdown-menu');

    expect(inputSpy).toHaveReceivedEventDetail('en');
    expect(dropMenuElm.className.split(' ')).not.toContain('opened');
  });
});