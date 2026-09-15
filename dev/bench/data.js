window.BENCHMARK_DATA = {
  "lastUpdate": 1789496066683,
  "repoUrl": "https://github.com/AJenbo/phpactor",
  "entries": {
    "Phpactor Benchmarks": [
      {
        "commit": {
          "author": {
            "email": "anders@jenbo.dk",
            "name": "Anders Jenbo",
            "username": "AJenbo"
          },
          "committer": {
            "email": "anders@jenbo.dk",
            "name": "Anders Jenbo",
            "username": "AJenbo"
          },
          "distinct": true,
          "id": "0c21138ae3fe060b60dd1b8c74e338b6c4e8e880",
          "message": "Fix worse:analyse not finding functions",
          "timestamp": "2026-08-11T02:35:23+02:00",
          "tree_id": "fdb16960799a50947515ef452494deb4de4b129a",
          "url": "https://github.com/AJenbo/phpactor/commit/0c21138ae3fe060b60dd1b8c74e338b6c4e8e880"
        },
        "date": 1786408642225,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "ClassMemberCompletorBench::benchComplete (short)",
            "value": 8.677720156555573,
            "range": "± 1.52%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ClassMemberCompletorBench::benchComplete (long)",
            "value": 136.83518786692784,
            "range": "± 0.92%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "WorseLocalVariableCompletorBench::benchComplete (short)",
            "value": 2.045577299412936,
            "range": "± 0.78%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "WorseLocalVariableCompletorBench::benchComplete (long)",
            "value": 18.576994129159004,
            "range": "± 0.85%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ConfigLoaderBench::benchJsonLoadConfig",
            "value": 0.015479373776908091,
            "range": "± 2.49%",
            "unit": "ms",
            "extra": "30 iterations, 50 revs"
          },
          {
            "name": "ConfigLoaderBench::benchJsonLoadConfigWithBuilder",
            "value": 0.01688669275929543,
            "range": "± 2.61%",
            "unit": "ms",
            "extra": "30 iterations, 50 revs"
          },
          {
            "name": "ConfigLoaderBench::benchJsonLoadConfigWithNonExistingYaml",
            "value": 0.03798136986301379,
            "range": "± 1.59%",
            "unit": "ms",
            "extra": "30 iterations, 50 revs"
          },
          {
            "name": "ConfigLoaderBench::benchJsonPlainPhp",
            "value": 0.007848806262230919,
            "range": "± 2.41%",
            "unit": "ms",
            "extra": "30 iterations, 50 revs"
          },
          {
            "name": "ConfigLoaderBench::benchYamlLoadConfig",
            "value": 0.06863643835616426,
            "range": "± 0.92%",
            "unit": "ms",
            "extra": "30 iterations, 50 revs"
          },
          {
            "name": "LexerBench::benchLex",
            "value": 522,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "LexerBench::benchLex (1)",
            "value": 1194,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "PhpactorParserBench::benchParse",
            "value": 0.04732876712328755,
            "range": "± 2.86%",
            "unit": "ms",
            "extra": "33 iterations, 50 revs"
          },
          {
            "name": "PhpactorParserBench::benchAssert",
            "value": 14.616380430528388,
            "range": "± 0.98%",
            "unit": "ms",
            "extra": "10 iterations, 5 revs"
          },
          {
            "name": "ImportNameProviderBench::benchDiagnostics",
            "value": 10.254812133072312,
            "range": "± 1.12%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ImportNameProviderBench::benchCodeActions",
            "value": 10.377863013698596,
            "range": "± 1.22%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 1)",
            "value": 0.07049765166340496,
            "range": "± 2.39%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 1001)",
            "value": 0.07026751467710443,
            "range": "± 2.32%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 2001)",
            "value": 0.0693266144814095,
            "range": "± 2.88%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 3001)",
            "value": 0.07024677103718381,
            "range": "± 2.16%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 4001)",
            "value": 0.06919745596868881,
            "range": "± 3.26%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 5001)",
            "value": 0.06824794520547939,
            "range": "± 2.75%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 6001)",
            "value": 0.06943287671232898,
            "range": "± 6.78%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "TokenExpanderBench::benchExpandTokenizedString",
            "value": 1.320412720156558,
            "range": "± 3.57%",
            "unit": "μs",
            "extra": "33 iterations, 10000 revs"
          },
          {
            "name": "TokenExpanderBench::benchExpandStringWithNoTokens",
            "value": 0.04695479452054839,
            "range": "± 3.16%",
            "unit": "μs",
            "extra": "33 iterations, 10000 revs"
          },
          {
            "name": "SearchBench::benchBareFileSearch (A)",
            "value": 0.11392563600782771,
            "range": "± 6.46%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "SearchBench::benchBareFileSearch (Request)",
            "value": 0.1173816046966731,
            "range": "± 9.15%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "SearchBench::benchFullFileSearch (A)",
            "value": 0.113009784735812,
            "range": "± 1.92%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "SearchBench::benchFullFileSearch (Request)",
            "value": 0.11154011741682962,
            "range": "± 3.91%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ClassRecordShortNameBench::benchShortName",
            "value": 0.07219178082191763,
            "range": "± 5.58%",
            "unit": "μs",
            "extra": "33 iterations, 1000 revs"
          },
          {
            "name": "IndexedReferenceFinderBench::benchBareFileSearch",
            "value": 935592,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "EfficientLineColsBench::benchLineCols",
            "value": 314,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "EfficientLineColsBench::benchLineColsUtf16Positions",
            "value": 293,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "EfficientLineColsBench::benchIneffificentLineCols",
            "value": 273,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "YiiBench::benchMembers",
            "value": 489074.90802348335,
            "range": "± 97.71%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "SelfReflectClassBench::benchMethodsAndProperties",
            "value": 0.8189841487279982,
            "range": "± 1.05%",
            "unit": "ms",
            "extra": "5 iterations, 10 revs"
          },
          {
            "name": "SelfReflectClassBench::benchFrames",
            "value": 1.2464516634050646,
            "range": "± 0.52%",
            "unit": "ms",
            "extra": "5 iterations, 10 revs"
          },
          {
            "name": "AnalyserBench::benchAnalyse",
            "value": 97317,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "PhpUnitReflectClassBench::test_case",
            "value": 13669.956947162507,
            "range": "± 0.59%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "PhpUnitReflectClassBench::test_case_methods_and_properties",
            "value": 226.6250195694723,
            "range": "± 0.43%",
            "unit": "ms",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "PhpUnitReflectClassBench::test_case_method_frames",
            "value": 221.9142720156539,
            "range": "± 0.32%",
            "unit": "ms",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "ReflectionStubsBench::test_classes_and_methods",
            "value": 4.823,
            "range": "± 0.00%",
            "unit": "ms",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics (lots_of_missing_methods.test)",
            "value": 59725.93150684931,
            "range": "± 0.47%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics (lots_of_new_generic_objects.test)",
            "value": 24149.892367906315,
            "range": "± 0.47%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics (lots_of_new_objects.test)",
            "value": 21567.819960861052,
            "range": "± 0.48%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics (method_chain.test)",
            "value": 26550.567514676677,
            "range": "± 0.90%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics (phpstan.test)",
            "value": 657819.4246575437,
            "range": "± 0.24%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "CarbonReflectBench::benchCarbonReflection",
            "value": 64743.782778864814,
            "range": "± 0.60%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "ReflectMethodBench::method",
            "value": 1.4318473581213302,
            "range": "± 2.36%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ReflectMethodBench::method_return_type",
            "value": 2.6408767123287764,
            "range": "± 0.87%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ReflectMethodBench::method_inferred_return_type",
            "value": 1.8694657534246701,
            "range": "± 1.08%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ReflectPropertyBench::property",
            "value": 1.3173307240704435,
            "range": "± 0.97%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ReflectPropertyBench::property_return_type",
            "value": 2.6153268101761658,
            "range": "± 0.91%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "CompleteBench::benchComplete",
            "value": 142812,
            "range": "± 197.44%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ClassSearchBench::benchClassSearch",
            "value": 101559.89041095783,
            "range": "± 1.09%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "BaseLineBench::benchVersion",
            "value": 80.214294520548,
            "range": "± 5.37%",
            "unit": "ms",
            "extra": "4 iterations, 2 revs"
          },
          {
            "name": "BaseLineBench::benchRpcEcho",
            "value": 89.16013796477532,
            "range": "± 0.77%",
            "unit": "ms",
            "extra": "4 iterations, 2 revs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "anders@jenbo.dk",
            "name": "Anders Jenbo",
            "username": "AJenbo"
          },
          "committer": {
            "email": "anders@jenbo.dk",
            "name": "Anders Jenbo",
            "username": "AJenbo"
          },
          "distinct": true,
          "id": "51d53fa03f4aab335f5a629114403c7a940dc6cf",
          "message": "Fix a few false positives from the analyzer",
          "timestamp": "2026-08-15T00:59:08+02:00",
          "tree_id": "91d343bbca7601a24e1e16cc2a733a3d4ac30862",
          "url": "https://github.com/AJenbo/phpactor/commit/51d53fa03f4aab335f5a629114403c7a940dc6cf"
        },
        "date": 1786748461987,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "WorseLocalVariableCompletorBench::benchComplete (short)",
            "value": 2.2954520547945125,
            "range": "± 2.06%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "WorseLocalVariableCompletorBench::benchComplete (long)",
            "value": 22.104262230919762,
            "range": "± 1.38%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ClassMemberCompletorBench::benchComplete (short)",
            "value": 9.707890410958935,
            "range": "± 1.08%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ClassMemberCompletorBench::benchComplete (long)",
            "value": 153.16059295499417,
            "range": "± 0.23%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ConfigLoaderBench::benchJsonLoadConfig",
            "value": 0.03420219178082195,
            "range": "± 8.62%",
            "unit": "ms",
            "extra": "30 iterations, 50 revs"
          },
          {
            "name": "ConfigLoaderBench::benchJsonLoadConfigWithBuilder",
            "value": 0.03557835616438355,
            "range": "± 0.73%",
            "unit": "ms",
            "extra": "30 iterations, 50 revs"
          },
          {
            "name": "ConfigLoaderBench::benchJsonLoadConfigWithNonExistingYaml",
            "value": 0.0578054794520539,
            "range": "± 1.18%",
            "unit": "ms",
            "extra": "30 iterations, 50 revs"
          },
          {
            "name": "ConfigLoaderBench::benchJsonPlainPhp",
            "value": 0.020792367906066568,
            "range": "± 0.87%",
            "unit": "ms",
            "extra": "30 iterations, 50 revs"
          },
          {
            "name": "ConfigLoaderBench::benchYamlLoadConfig",
            "value": 0.08870590998042939,
            "range": "± 1.19%",
            "unit": "ms",
            "extra": "30 iterations, 50 revs"
          },
          {
            "name": "PhpactorParserBench::benchParse",
            "value": 0.055962074363992115,
            "range": "± 5.74%",
            "unit": "ms",
            "extra": "33 iterations, 50 revs"
          },
          {
            "name": "PhpactorParserBench::benchAssert",
            "value": 18.489668101761335,
            "range": "± 0.59%",
            "unit": "ms",
            "extra": "10 iterations, 5 revs"
          },
          {
            "name": "LexerBench::benchLex",
            "value": 586,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "LexerBench::benchLex (1)",
            "value": 1469,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "ImportNameProviderBench::benchDiagnostics",
            "value": 11.775649706457909,
            "range": "± 3.02%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ImportNameProviderBench::benchCodeActions",
            "value": 11.910821917808164,
            "range": "± 0.59%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 1)",
            "value": 0.07494735812133094,
            "range": "± 8.03%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 1001)",
            "value": 0.07563698630137065,
            "range": "± 2.03%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 2001)",
            "value": 0.07515322896281933,
            "range": "± 1.79%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 3001)",
            "value": 0.07540332681017747,
            "range": "± 2.11%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 4001)",
            "value": 0.07356712328767079,
            "range": "± 2.51%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 5001)",
            "value": 0.07646986301370082,
            "range": "± 1.31%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 6001)",
            "value": 0.0750483365949122,
            "range": "± 8.60%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "TokenExpanderBench::benchExpandTokenizedString",
            "value": 1.6110575342465674,
            "range": "± 1.33%",
            "unit": "μs",
            "extra": "33 iterations, 10000 revs"
          },
          {
            "name": "TokenExpanderBench::benchExpandStringWithNoTokens",
            "value": 0.060190410958904005,
            "range": "± 8.76%",
            "unit": "μs",
            "extra": "33 iterations, 10000 revs"
          },
          {
            "name": "SearchBench::benchBareFileSearch (A)",
            "value": 0.13721330724070444,
            "range": "± 7.70%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "SearchBench::benchBareFileSearch (Request)",
            "value": 0.1379080234833659,
            "range": "± 1.03%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "SearchBench::benchFullFileSearch (A)",
            "value": 0.1334442270058708,
            "range": "± 3.83%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "SearchBench::benchFullFileSearch (Request)",
            "value": 0.132665362035225,
            "range": "± 4.82%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "IndexedReferenceFinderBench::benchBareFileSearch",
            "value": 1076912,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "ClassRecordShortNameBench::benchShortName",
            "value": 0.09149706457925663,
            "range": "± 8.75%",
            "unit": "μs",
            "extra": "33 iterations, 1000 revs"
          },
          {
            "name": "EfficientLineColsBench::benchLineCols",
            "value": 289,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "EfficientLineColsBench::benchLineColsUtf16Positions",
            "value": 288,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "EfficientLineColsBench::benchIneffificentLineCols",
            "value": 300,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "SelfReflectClassBench::benchMethodsAndProperties",
            "value": 0.9551203522504801,
            "range": "± 0.23%",
            "unit": "ms",
            "extra": "5 iterations, 10 revs"
          },
          {
            "name": "SelfReflectClassBench::benchFrames",
            "value": 1.4002542074363817,
            "range": "± 0.64%",
            "unit": "ms",
            "extra": "5 iterations, 10 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics (lots_of_missing_methods.test)",
            "value": 60390.29941291615,
            "range": "± 0.84%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics (lots_of_new_generic_objects.test)",
            "value": 26143.986301369732,
            "range": "± 0.73%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics (lots_of_new_objects.test)",
            "value": 22962.931506849636,
            "range": "± 0.33%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics (method_chain.test)",
            "value": 29291.557729941065,
            "range": "± 0.33%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics (phpstan.test)",
            "value": 734395.0508806282,
            "range": "± 0.54%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "ReflectionStubsBench::test_classes_and_methods",
            "value": 5.555,
            "range": "± 0.00%",
            "unit": "ms",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "PhpUnitReflectClassBench::test_case",
            "value": 15075.205479452125,
            "range": "± 0.27%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "PhpUnitReflectClassBench::test_case_methods_and_properties",
            "value": 255.8297690802348,
            "range": "± 135.27%",
            "unit": "ms",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "PhpUnitReflectClassBench::test_case_method_frames",
            "value": 240.5121643835597,
            "range": "± 0.55%",
            "unit": "ms",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "AnalyserBench::benchAnalyse",
            "value": 109932,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "ReflectPropertyBench::property",
            "value": 1.4965362035225134,
            "range": "± 3.53%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ReflectPropertyBench::property_return_type",
            "value": 2.952508806262234,
            "range": "± 8.75%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "YiiBench::benchMembers",
            "value": 531389.9295499041,
            "range": "± 0.79%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "ReflectMethodBench::method",
            "value": 1.6169373776908051,
            "range": "± 1.92%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ReflectMethodBench::method_return_type",
            "value": 2.930888454011756,
            "range": "± 0.85%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ReflectMethodBench::method_inferred_return_type",
            "value": 2.116041095890422,
            "range": "± 1.84%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "CarbonReflectBench::benchCarbonReflection",
            "value": 75160.27397260186,
            "range": "± 0.29%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "ClassSearchBench::benchClassSearch",
            "value": 116366.06849315076,
            "range": "± 1.42%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "CompleteBench::benchComplete",
            "value": 165852,
            "range": "± 196.12%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "BaseLineBench::benchVersion",
            "value": 95.53891291585037,
            "range": "± 0.48%",
            "unit": "ms",
            "extra": "4 iterations, 2 revs"
          },
          {
            "name": "BaseLineBench::benchRpcEcho",
            "value": 103.71290900195619,
            "range": "± 0.71%",
            "unit": "ms",
            "extra": "4 iterations, 2 revs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "anders@jenbo.dk",
            "name": "Anders Jenbo",
            "username": "AJenbo"
          },
          "committer": {
            "email": "anders@jenbo.dk",
            "name": "Anders Jenbo",
            "username": "AJenbo"
          },
          "distinct": true,
          "id": "57c3ffc2ed161e21e402c348eef50ac0ffbb8282",
          "message": "Parallel indexing",
          "timestamp": "2026-09-15T20:11:54+02:00",
          "tree_id": "4e6b3fd3d1300bd39ecd3e0b9dbac6f8e97147bc",
          "url": "https://github.com/AJenbo/phpactor/commit/57c3ffc2ed161e21e402c348eef50ac0ffbb8282"
        },
        "date": 1789496036030,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "ClassMemberCompletorBench::benchComplete (short)",
            "value": 10.05978082191779,
            "range": "± 10.84%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ClassMemberCompletorBench::benchComplete (long)",
            "value": 163.13497847358138,
            "range": "± 0.94%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "WorseLocalVariableCompletorBench::benchComplete (short)",
            "value": 2.27900782778866,
            "range": "± 0.64%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "WorseLocalVariableCompletorBench::benchComplete (long)",
            "value": 22.1155362035229,
            "range": "± 0.52%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ConfigLoaderBench::benchJsonLoadConfig",
            "value": 0.028814990215264194,
            "range": "± 1.38%",
            "unit": "ms",
            "extra": "30 iterations, 50 revs"
          },
          {
            "name": "ConfigLoaderBench::benchJsonLoadConfigWithBuilder",
            "value": 0.03056027397260287,
            "range": "± 2.17%",
            "unit": "ms",
            "extra": "30 iterations, 50 revs"
          },
          {
            "name": "ConfigLoaderBench::benchJsonLoadConfigWithNonExistingYaml",
            "value": 0.05204070450097865,
            "range": "± 1.03%",
            "unit": "ms",
            "extra": "30 iterations, 50 revs"
          },
          {
            "name": "ConfigLoaderBench::benchJsonPlainPhp",
            "value": 0.016299178082191706,
            "range": "± 1.46%",
            "unit": "ms",
            "extra": "30 iterations, 50 revs"
          },
          {
            "name": "ConfigLoaderBench::benchYamlLoadConfig",
            "value": 0.08868457925636043,
            "range": "± 0.97%",
            "unit": "ms",
            "extra": "30 iterations, 50 revs"
          },
          {
            "name": "PhpactorParserBench::benchParse",
            "value": 0.05727452054794486,
            "range": "± 1.12%",
            "unit": "ms",
            "extra": "33 iterations, 50 revs"
          },
          {
            "name": "PhpactorParserBench::benchAssert",
            "value": 17.492971428571508,
            "range": "± 1.04%",
            "unit": "ms",
            "extra": "10 iterations, 5 revs"
          },
          {
            "name": "LexerBench::benchLex",
            "value": 564,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "LexerBench::benchLex (1)",
            "value": 1358,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "ImportNameProviderBench::benchDiagnostics",
            "value": 13.274109589041094,
            "range": "± 14.12%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ImportNameProviderBench::benchCodeActions",
            "value": 13.610146771037325,
            "range": "± 0.82%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 1)",
            "value": 0.09332133072406804,
            "range": "± 1.64%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 1001)",
            "value": 0.09268767123287552,
            "range": "± 2.09%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 2001)",
            "value": 0.09235988258316852,
            "range": "± 1.02%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 3001)",
            "value": 0.09029628180039131,
            "range": "± 2.44%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 4001)",
            "value": 0.09214500978473575,
            "range": "± 1.46%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 5001)",
            "value": 0.09354872798434236,
            "range": "± 1.23%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 6001)",
            "value": 0.09036457925636003,
            "range": "± 5.99%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "TokenExpanderBench::benchExpandTokenizedString",
            "value": 1.6196837573385618,
            "range": "± 1.37%",
            "unit": "μs",
            "extra": "33 iterations, 10000 revs"
          },
          {
            "name": "TokenExpanderBench::benchExpandStringWithNoTokens",
            "value": 0.05653013698630155,
            "range": "± 5.78%",
            "unit": "μs",
            "extra": "33 iterations, 10000 revs"
          },
          {
            "name": "SearchBench::benchBareFileSearch (A)",
            "value": 0.13597260273972595,
            "range": "± 7.81%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "SearchBench::benchBareFileSearch (Request)",
            "value": 0.1362407045009784,
            "range": "± 9.44%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "SearchBench::benchFullFileSearch (A)",
            "value": 0.13134833659491188,
            "range": "± 6.36%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "SearchBench::benchFullFileSearch (Request)",
            "value": 0.13388454011741668,
            "range": "± 10.70%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ClassRecordShortNameBench::benchShortName",
            "value": 0.08801174168297436,
            "range": "± 9.74%",
            "unit": "μs",
            "extra": "33 iterations, 1000 revs"
          },
          {
            "name": "IndexedReferenceFinderBench::benchBareFileSearch",
            "value": 1134058,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "EfficientLineColsBench::benchLineCols",
            "value": 294,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "EfficientLineColsBench::benchLineColsUtf16Positions",
            "value": 293,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "EfficientLineColsBench::benchIneffificentLineCols",
            "value": 285,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "YiiBench::benchMembers",
            "value": 581339.5890410959,
            "range": "± 97.68%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "ReflectPropertyBench::property",
            "value": 1.5901643835616428,
            "range": "± 1.02%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ReflectPropertyBench::property_return_type",
            "value": 3.0297495107631933,
            "range": "± 0.82%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics (lots_of_missing_methods.test)",
            "value": 70913.78669276081,
            "range": "± 0.41%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics (lots_of_new_generic_objects.test)",
            "value": 28557.477495107247,
            "range": "± 1.49%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics (lots_of_new_objects.test)",
            "value": 24769.933463796475,
            "range": "± 0.52%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics (method_chain.test)",
            "value": 29893.485322896326,
            "range": "± 0.48%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics (phpstan.test)",
            "value": 811130.6164383551,
            "range": "± 0.37%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "AnalyserBench::benchAnalyse",
            "value": 116097,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "ReflectMethodBench::method",
            "value": 1.6996947162426603,
            "range": "± 0.98%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ReflectMethodBench::method_return_type",
            "value": 3.0532191780821814,
            "range": "± 1.21%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ReflectMethodBench::method_inferred_return_type",
            "value": 2.200698630137039,
            "range": "± 0.47%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "SelfReflectClassBench::benchMethodsAndProperties",
            "value": 0.9751630136986326,
            "range": "± 0.82%",
            "unit": "ms",
            "extra": "5 iterations, 10 revs"
          },
          {
            "name": "SelfReflectClassBench::benchFrames",
            "value": 1.446736986301349,
            "range": "± 0.87%",
            "unit": "ms",
            "extra": "5 iterations, 10 revs"
          },
          {
            "name": "CarbonReflectBench::benchCarbonReflection",
            "value": 73149.3581213284,
            "range": "± 0.33%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "PhpUnitReflectClassBench::test_case",
            "value": 16420.0626223091,
            "range": "± 0.67%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "PhpUnitReflectClassBench::test_case_methods_and_properties",
            "value": 271.74308219177453,
            "range": "± 0.53%",
            "unit": "ms",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "PhpUnitReflectClassBench::test_case_method_frames",
            "value": 266.34145205478586,
            "range": "± 0.84%",
            "unit": "ms",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "ReflectionStubsBench::test_classes_and_methods",
            "value": 5.677,
            "range": "± 0.00%",
            "unit": "ms",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "BaseLineBench::benchVersion",
            "value": 88.78101369863023,
            "range": "± 0.78%",
            "unit": "ms",
            "extra": "4 iterations, 2 revs"
          },
          {
            "name": "BaseLineBench::benchRpcEcho",
            "value": 97.14466242661223,
            "range": "± 0.19%",
            "unit": "ms",
            "extra": "4 iterations, 2 revs"
          },
          {
            "name": "ClassSearchBench::benchClassSearch",
            "value": 115766.69863013743,
            "range": "± 0.94%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "CompleteBench::benchComplete",
            "value": 170652,
            "range": "± 193.69%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gregmayes@gmail.com",
            "name": "Greg Mayes",
            "username": "GregMayes"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ec564f09bd36de643ce38d7ab442288fe8d44084",
          "message": "When a stub declares the same variable twice, it now correctly sticks to the first declaration's index (#3064)",
          "timestamp": "2026-08-26T10:52:09+01:00",
          "tree_id": "ab9bbac0541fb9b80289e3eddac341e3dbe63dff",
          "url": "https://github.com/AJenbo/phpactor/commit/ec564f09bd36de643ce38d7ab442288fe8d44084"
        },
        "date": 1789496064555,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "ClassMemberCompletorBench::benchComplete (short)",
            "value": 7.584716242661401,
            "range": "± 1.53%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ClassMemberCompletorBench::benchComplete (long)",
            "value": 118.7239315068494,
            "range": "± 0.39%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "WorseLocalVariableCompletorBench::benchComplete (short)",
            "value": 1.8117338551859183,
            "range": "± 1.01%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "WorseLocalVariableCompletorBench::benchComplete (long)",
            "value": 17.27101369863039,
            "range": "± 0.63%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ConfigLoaderBench::benchJsonLoadConfig",
            "value": 0.026613424657534534,
            "range": "± 1.26%",
            "unit": "ms",
            "extra": "30 iterations, 50 revs"
          },
          {
            "name": "ConfigLoaderBench::benchJsonLoadConfigWithBuilder",
            "value": 0.027605362035224786,
            "range": "± 2.01%",
            "unit": "ms",
            "extra": "30 iterations, 50 revs"
          },
          {
            "name": "ConfigLoaderBench::benchJsonLoadConfigWithNonExistingYaml",
            "value": 0.04507428571428579,
            "range": "± 6.21%",
            "unit": "ms",
            "extra": "30 iterations, 50 revs"
          },
          {
            "name": "ConfigLoaderBench::benchJsonPlainPhp",
            "value": 0.016327084148728004,
            "range": "± 3.31%",
            "unit": "ms",
            "extra": "30 iterations, 50 revs"
          },
          {
            "name": "ConfigLoaderBench::benchYamlLoadConfig",
            "value": 0.06874771037182074,
            "range": "± 0.92%",
            "unit": "ms",
            "extra": "30 iterations, 50 revs"
          },
          {
            "name": "PhpactorParserBench::benchParse",
            "value": 0.04264806262230909,
            "range": "± 2.54%",
            "unit": "ms",
            "extra": "33 iterations, 50 revs"
          },
          {
            "name": "PhpactorParserBench::benchAssert",
            "value": 14.289922504892344,
            "range": "± 0.74%",
            "unit": "ms",
            "extra": "10 iterations, 5 revs"
          },
          {
            "name": "LexerBench::benchLex",
            "value": 452,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "LexerBench::benchLex (1)",
            "value": 1088,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "ImportNameProviderBench::benchDiagnostics",
            "value": 9.16729549902146,
            "range": "± 0.72%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ImportNameProviderBench::benchCodeActions",
            "value": 9.199573385518603,
            "range": "± 0.66%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 1)",
            "value": 0.058261056751467324,
            "range": "± 3.22%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 1001)",
            "value": 0.05770019569471594,
            "range": "± 2.34%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 2001)",
            "value": 0.056829158512720114,
            "range": "± 2.25%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 3001)",
            "value": 0.05688356164383545,
            "range": "± 3.56%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 4001)",
            "value": 0.05863228962817881,
            "range": "± 3.06%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 5001)",
            "value": 0.057060273972602896,
            "range": "± 2.63%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 6001)",
            "value": 0.05750704500978426,
            "range": "± 2.36%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "TokenExpanderBench::benchExpandTokenizedString",
            "value": 1.228276320939317,
            "range": "± 1.54%",
            "unit": "μs",
            "extra": "33 iterations, 10000 revs"
          },
          {
            "name": "TokenExpanderBench::benchExpandStringWithNoTokens",
            "value": 0.04512954990215291,
            "range": "± 2.39%",
            "unit": "μs",
            "extra": "33 iterations, 10000 revs"
          },
          {
            "name": "SearchBench::benchBareFileSearch (A)",
            "value": 0.10749706457925631,
            "range": "± 3.93%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "SearchBench::benchBareFileSearch (Request)",
            "value": 0.10978473581213302,
            "range": "± 7.45%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "SearchBench::benchFullFileSearch (A)",
            "value": 0.10336203522504889,
            "range": "± 2.19%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "SearchBench::benchFullFileSearch (Request)",
            "value": 0.10400782778864964,
            "range": "± 4.98%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ClassRecordShortNameBench::benchShortName",
            "value": 0.07232485322896293,
            "range": "± 7.39%",
            "unit": "μs",
            "extra": "33 iterations, 1000 revs"
          },
          {
            "name": "IndexedReferenceFinderBench::benchBareFileSearch",
            "value": 840323,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "EfficientLineColsBench::benchLineCols",
            "value": 231,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "EfficientLineColsBench::benchLineColsUtf16Positions",
            "value": 234,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "EfficientLineColsBench::benchIneffificentLineCols",
            "value": 233,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "YiiBench::benchMembers",
            "value": 413757.15851272014,
            "range": "± 99.59%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "ReflectPropertyBench::property",
            "value": 1.1792054794520495,
            "range": "± 1.44%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ReflectPropertyBench::property_return_type",
            "value": 2.26164970645792,
            "range": "± 1.27%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics (lots_of_missing_methods.test)",
            "value": 47660.28180039191,
            "range": "± 1.20%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics (lots_of_new_generic_objects.test)",
            "value": 20192.05088062625,
            "range": "± 1.12%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics (lots_of_new_objects.test)",
            "value": 17695.424657534168,
            "range": "± 0.27%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics (method_chain.test)",
            "value": 22748.571428571304,
            "range": "± 0.68%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics (phpstan.test)",
            "value": 571133.6634050912,
            "range": "± 0.42%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "AnalyserBench::benchAnalyse",
            "value": 86117,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "ReflectMethodBench::method",
            "value": 1.2815342465753414,
            "range": "± 1.14%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ReflectMethodBench::method_return_type",
            "value": 2.295401174168292,
            "range": "± 3.00%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ReflectMethodBench::method_inferred_return_type",
            "value": 1.64330528375733,
            "range": "± 1.65%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "SelfReflectClassBench::benchMethodsAndProperties",
            "value": 0.7437790606653565,
            "range": "± 1.75%",
            "unit": "ms",
            "extra": "5 iterations, 10 revs"
          },
          {
            "name": "SelfReflectClassBench::benchFrames",
            "value": 1.0994990215264329,
            "range": "± 0.66%",
            "unit": "ms",
            "extra": "5 iterations, 10 revs"
          },
          {
            "name": "CarbonReflectBench::benchCarbonReflection",
            "value": 56800.6144814092,
            "range": "± 0.63%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "PhpUnitReflectClassBench::test_case",
            "value": 12069.64187866927,
            "range": "± 9.98%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "PhpUnitReflectClassBench::test_case_methods_and_properties",
            "value": 192.74539726027078,
            "range": "± 0.15%",
            "unit": "ms",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "PhpUnitReflectClassBench::test_case_method_frames",
            "value": 187.96458121330505,
            "range": "± 0.51%",
            "unit": "ms",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "ReflectionStubsBench::test_classes_and_methods",
            "value": 4.354,
            "range": "± 0.00%",
            "unit": "ms",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "BaseLineBench::benchVersion",
            "value": 75.90783855185741,
            "range": "± 0.61%",
            "unit": "ms",
            "extra": "4 iterations, 2 revs"
          },
          {
            "name": "BaseLineBench::benchRpcEcho",
            "value": 83.65267221135079,
            "range": "± 1.55%",
            "unit": "ms",
            "extra": "4 iterations, 2 revs"
          },
          {
            "name": "ClassSearchBench::benchClassSearch",
            "value": 91838.08219178126,
            "range": "± 0.69%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "CompleteBench::benchComplete",
            "value": 147968.02152641874,
            "range": "± 186.02%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          }
        ]
      }
    ]
  }
}