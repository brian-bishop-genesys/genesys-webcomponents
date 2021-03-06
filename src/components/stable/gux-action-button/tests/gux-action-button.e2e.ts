import { newE2EPage } from '@stencil/core/testing';

describe('gux-action-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<gux-action-button></gux-action-button>');
    const element = await page.find('gux-action-button');
    expect(element).toHaveClass('hydrated');
  });

  it('Should fire actionClick event if not disabled', async () => {
    const page = await newE2EPage();
    await page.setContent('<gux-action-button></gux-action-button>');
    const element = await page.find('gux-action-button');
    const onActionClick = await element.spyOnEvent('actionClick');
    await element.click();
    expect(onActionClick).toHaveReceivedEventTimes(1);
  });

  it('Should not fire actionClick event if disabled', async () => {
    const page = await newE2EPage();
    await page.setContent('<gux-action-button></gux-action-button>');
    const element = await page.find('gux-action-button');
    const onActionClick = await element.spyOnEvent('actionClick');
    element.setAttribute('disabled', 'disabled');
    await page.waitForChanges();
    expect(element).toHaveAttribute('disabled');
    expect(element).toEqualAttribute('disabled', 'disabled');
    await element.click();
    expect(onActionClick).toHaveReceivedEventTimes(0);
  });

  it('Should fire open event if not disabled', async () => {
    const page = await newE2EPage();
    await page.setContent('<gux-action-button></gux-action-button>');
    const element = await page.find('gux-action-button');
    const dropdownElm = await element.find('.gux-dropdown');
    const onOpen = await element.spyOnEvent('open');
    await dropdownElm.click();
    expect(onOpen).toHaveReceivedEventTimes(1);
  });

  it('Should not fire open event if disabled', async () => {
    const page = await newE2EPage();
    await page.setContent('<gux-action-button></gux-action-button>');
    const element = await page.find('gux-action-button');
    const onOpen = await element.spyOnEvent('open');
    element.setAttribute('disabled', 'disabled');
    await page.waitForChanges();
    expect(element).toHaveAttribute('disabled');
    expect(element).toEqualAttribute('disabled', 'disabled');
    await element.click();
    expect(onOpen).toHaveReceivedEventTimes(0);
  });
});
