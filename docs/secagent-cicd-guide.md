# SecAgent CI/CD Guide for This Repository

This repository supports two SecAgent integration modes:

- Docker tool image mode
- Non-Docker host-install mode

## Unified Config

Use one config file (`secagent.yml`) to enable all scanners:

- semgrep
- gitleaks
- trivy
- checkov
- zap

Reports generated in one run:

- json
- html
- sarif
- md
- csv

## Docker Tool Mode

Use this when you want reproducible scanner runtime from one image.

```bash
docker pull sikanderali/secagent:latest
docker run --rm --network host --user "$(id -u):$(id -g)" -v "$PWD":/workspace -w /workspace \
  sikanderali/secagent:latest scan --target /workspace --config /workspace/secagent.yml
```

## Non-Docker Mode

Use this when you want direct execution on CI runner.

```bash
bash <(curl -fsSL https://raw.githubusercontent.com/SIKANDERKUMBHAR/secagent-devsecops-orchestrator/main/scripts/setup-local.sh)
export PATH="$HOME/.local/bin:$PATH"
secagent doctor --config ./secagent.yml
secagent scan --target . --config ./secagent.yml
```

## DAST (ZAP sidecar)

Use a fresh ZAP container per scan for stable results.

```bash
docker rm -f secagent-zap || true
docker run -d --name secagent-zap -p 8090:8090 ghcr.io/zaproxy/zaproxy:stable \
  zap.sh -daemon -host 0.0.0.0 -port 8090 \
  -config api.disablekey=true \
  -config api.addrs.addr.name=.* \
  -config api.addrs.addr.regex=true
```

## Exit Code Meaning

- `0` = scan complete, policy pass
- `1` = scan complete, policy fail
- `3` = scan incomplete due scanner/runtime error

## Artifact Expectations

Each CI stage should upload:

- `reports/secagent-report.json`
- `reports/secagent-report.html`
- `reports/secagent-report.sarif`
- `reports/secagent-report.md`
- `reports/secagent-report.csv`
