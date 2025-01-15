name: Bug Report
description: "Found a bug...help something dont work right"
title: "[Bug Report]: "
labels: [ "bug" ]
body:
  - type: input
    attributes:
      label: Modpack Version
      description: What version of the pack are you using.
    validations:
      required: true
  - type: dropdown
    attributes:
      label: Did you test the latest version?
      options:
        - "No"
        - "Yes"
    validations:
      required: true
  - type: dropdown
    id: severity
    attributes:
      label: Severity
      multiple: false
      options:
        - Odd Results
        - Performance
        - Crashing
    validations:
      required: true
  - type: textarea
    id: desc
    attributes:
      label: Describe the Issue
    validations:
      required: true
  - type: textarea
    attributes:
      label: Reproduction Steps
      description: Explain in detail what happened before you experienced the issue.
    validations:
      required: true
  - type: textarea
    attributes:
      label: Screenshots and Videos
      description: If applicable, add screenshots or videos to help explain your issue.
    validations:
      required: false
  - type: textarea
    attributes:
      label: Additional Context
      description: Add any extra context about the issue here.
    validations:
      required: false
  - type: input
    attributes:
      label: Crash log
      description: |
        Provide a link to a crashlog. E.g. on [mclo.gs](https://mclo.gs/), or similar.
        If this is not a crash report, you can hold F3+C for over 10 seconds to force one. This provides with more details to reproduce it without needing to manually acquire them.
    validations:
      required: true
