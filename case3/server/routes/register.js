import { defaultHTMLHeader } from "./header";
import { default as renderPage } from "../renderer";

export const registRoute = (
  instance,
  url,
  targetModule,
  fileName,
  additionalData
) => {
  instance.route({
    method: "GET",
    url,
    handler(request, response) {
      // 기본 헤더 설정
      defaultHTMLHeader(response);
      // 렌더 함수 실행
      const { html, head } = targetModule.default.render();

      // 회신
      response.send(renderPage(head, html, fileName, additionalData));
    },
  });
};

export const getFileName = (fileNames, fileName) =>
  fileNames.filter((_filename) => _filename.includes(fileName));
