import { test, expect } from '@playwright/experimental-ct-react';
import App from './App';

test.use({ viewport: { width: 500, height: 500 } });

test('should work', async ({ mount }) => {
  const component = await mount(<App />);

  // スクリーンショットを撮る
  await expect(component).toHaveScreenshot(
    "App.spec.jsx-00.png"
  )
  
  // サブミットボタンを探してクリックする
  const submitButton = await component.getByRole('button', { name: 'Submit' });
  await submitButton.click();

  // エラーメッセージが表示される
  const errorMessage = await component.getByText('This field is required');
  await expect(errorMessage).toBeVisible();

  // スクリーンショットを撮る
  await expect(component).toHaveScreenshot(
    "App.spec.jsx-01.png"
  )
});
