(() => {
  'use strict';

  const modeSwitch = document.querySelector('#mode-switch');
  modeSwitch.addEventListener('click', () => {
    const chaos = modeSwitch.getAttribute('aria-pressed') !== 'true';
    modeSwitch.setAttribute('aria-pressed', String(chaos));
    document.body.classList.toggle('chaos', chaos);
    document.querySelectorAll('[data-normal]').forEach((element) => {
      element.textContent = (chaos ? element.dataset.chaos : element.dataset.normal).replace(/\\n/g, '\n');
    });
  });

  const cleanButton = document.querySelector('#clean-disk');
  const diskTrack = document.querySelector('.disk-track');
  let cleaned = false;
  cleanButton.addEventListener('click', () => {
    if (cleaned) {
      cleaned = false;
      diskTrack.classList.remove('cleaned');
      diskTrack.setAttribute('aria-valuenow', '96');
      document.querySelector('#disk-percent').textContent = '已使用 96%';
      document.querySelector('#disk-status').textContent = '空间告急！需要一点帮助…';
      cleanButton.textContent = '交给奔腾 ✦';
      return;
    }
    cleanButton.disabled = true;
    cleanButton.textContent = '正在整理中…';
    document.querySelector('#disk-status').textContent = '一点耐心，马上就好…';
    diskTrack.classList.add('cleaned');
    window.setTimeout(() => {
      cleaned = true;
      diskTrack.setAttribute('aria-valuenow', '42');
      document.querySelector('#disk-percent').textContent = '已使用 42%';
      document.querySelector('#disk-status').textContent = '清理完成！老伙计又能跑了。';
      cleanButton.textContent = '再体验一次 ↻';
      cleanButton.disabled = false;
    }, 1100);
  });

  const dialog = document.querySelector('#join-dialog');
  const copyButton = document.querySelector('#copy-qq');
  const copyStatus = document.querySelector('#copy-status');
  document.querySelectorAll('[data-join]').forEach((button) => {
    button.addEventListener('click', () => {
      copyStatus.textContent = '先来认识一下，不用紧张。';
      copyButton.innerHTML = '复制群号 <span aria-hidden="true">▣</span>';
      dialog.showModal();
      document.body.style.overflow = 'hidden';
    });
  });
  document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (event) => {
    const rect = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) {
      dialog.close();
    }
  });
  dialog.addEventListener('close', () => { document.body.style.overflow = ''; });

  function fallbackCopy() {
    const input = document.createElement('textarea');
    input.value = '817913439';
    input.setAttribute('aria-label', '招新 QQ 群号');
    input.style.cssText = 'position:fixed;opacity:0;top:0;left:0;';
    dialog.append(input);
    input.focus();
    input.select();
    let copied = false;
    try { copied = document.execCommand('copy'); } catch { /* Manual copy remains available. */ }
    input.remove();
    copyButton.focus();
    return copied;
  }

  copyButton.addEventListener('click', async () => {
    let copied = false;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText('817913439');
        copied = true;
      } else {
        copied = fallbackCopy();
      }
    } catch { copied = fallbackCopy(); }
    copyButton.textContent = copied ? '群号已复制 ✓' : '再试一次复制';
    copyStatus.textContent = copied ? '打开 QQ → 搜索群号 → 申请加入，群里见！' : '未能自动复制，请长按或选中群号 817913439 手动复制。';
  });
})();
