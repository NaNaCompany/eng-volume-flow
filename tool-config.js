export const tool = {
  "id": "E004",
  "title": "관 단면 체적유량 계산기",
  "inputs_text": "단면적 A [m²], 단면 평균속도 V [m/s]",
  "formula": "Q = A V",
  "output_text": "체적유량 Q [m³/s]",
  "assumptions": "A>0. 속도는 단면 평균 성분을 사용한다. 한 점의 최대속도를 평균속도처럼 넣지 않는다. 출력 단위 L/min은 같은 Q의 표시 전환만 제공한다.",
  "purpose": "유속 유량 계산 / 배관·송풍구 단면 유량 검산",
  "sources": [
    {
      "label": "OpenStax · Fluid Dynamics",
      "url": "https://openstax.org/books/university-physics-volume-1/pages/14-5-fluid-dynamics"
    }
  ],
  "slug": "eng-volume-flow",
  "category": "유체",
  "result_label": "체적유량 Q",
  "result_dimension": "flow",
  "fields": [
    {
      "key": "a",
      "label": "단면적 A",
      "dimension": "area",
      "example": 0.01,
      "constraint": "positive",
      "display_unit": "m2",
      "display_value": "0.01"
    },
    {
      "key": "v",
      "label": "단면 평균속도 V",
      "dimension": "speed",
      "example": 2,
      "constraint": "signed",
      "display_unit": "ms",
      "display_value": "2"
    }
  ],
  "site": "https://nanalab.kr/eng-volume-flow/",
  "repository": "https://github.com/NaNaCompany/eng-volume-flow",
  "condition": "",
  "output_unit": "m3s"
};
