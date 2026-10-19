# GitHub Pages 배포

1. 저장소 Settings → Pages → Build and deployment의 Source를 **GitHub Actions**로 설정합니다.
2. 변경 사항을 `main` 브랜치에 push합니다.
3. Actions → Deploy GitHub Pages에서 빌드와 배포 결과를 확인합니다.

기본 배포 주소: https://choi-eun-seo.github.io/dogok-festival-v3/

워크플로는 pnpm lockfile로 의존성을 설치하고 `pnpm build`로 생성한 `out/`만 배포합니다. 별도 PAT나 AWS 키는 필요하지 않습니다. 배포 작업에만 Pages 쓰기 및 OIDC 권한을 부여합니다.

Pages 설정에서 얻은 `base_path`를 빌드 환경변수 `PAGES_BASE_PATH`로 전달합니다. 로컬 개발에서는 이 값을 설정하지 않아 `/`에서 실행됩니다. 커스텀 도메인으로 전환한 뒤에는 워크플로를 다시 실행해 경로를 재빌드합니다.

동일한 경로로 로컬 빌드를 검사하려면:

```sh
PAGES_BASE_PATH=/dogok-festival-v3 pnpm build
```

이 프로젝트는 정적 내보내기를 사용하므로 `next start` 대신 정적 파일 서버로 `out/`을 미리 봐야 합니다. SSR, 서버 액션 및 서버 API는 Pages에서 실행되지 않습니다. 이미지 최적화 서버도 없으므로 원본 이미지를 제공하며, 큰 PNG는 배포 전에 압축하면 전송량을 줄일 수 있습니다.

공식 문서: https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages
