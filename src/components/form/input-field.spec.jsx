import { test, expect } from '@playwright/experimental-ct-react';
import { InputField } from './input-field';
import { FormProviderWrapperComponent } from './test-helper';

test.use({ viewport: { width: 500, height: 500 } });

test('should work', async ({ mount }) => {
  const component = await mount(
    <FormProviderWrapperComponent>
      <InputField name={'test'} />
    </FormProviderWrapperComponent>
  );

  component.page().on("console", (msg) => console.log(msg))

  console.log(await component.innerHTML());

  // スクリーンショットを撮る
  await expect(component).toHaveScreenshot(
    "input-field.spec.jsx-00.png"
  )
  
  // サブミットボタンを探してクリックする
  const submitButton = await component.getByRole('button', { name: 'Submit' });
  await submitButton.click();

  // エラーメッセージが表示される
  const errorMessage = await component.getByText('Expected number, received nan');
  await expect(errorMessage).toBeVisible();

  // スクリーンショットを撮る
  await expect(component).toHaveScreenshot(
    "input-field.spec.jsx-01.png"
  )
});
